#!/usr/bin/env bun

import { mkdir } from "fs/promises";
import path from "path";

const WIKI_BASE = "https://wiki.factorio.com";
const API_URL = `${WIKI_BASE}/api.php`;
const INVENTORY_RAW_URL = `${WIKI_BASE}/Template:Inventory?action=raw`;

interface InventoryItem {
  title: string;
  internalName: string | null;
  href: string;
  imgSrc: string;
  imgSrcset: string[];
}

interface InventoryRow {
  items: (InventoryItem | null)[];
}

interface InventoryTab {
  name: string;
  iconSrc: string;
  iconSrcset: string[];
  rows: InventoryRow[];
}

interface InventoryData {
  tabs: InventoryTab[];
}

type MediaWikiParseResponse =
  | {
      parse: {
        text: {
          "*": string;
        };
      };
    }
  | {
      error: {
        info?: string;
        code?: string;
      };
    };

interface MediaWikiQueryResponse {
  query?: {
    pages?: Record<
      string,
      {
        title?: string;
        revisions?: Array<{
          slots?: {
            main?: {
              "*"?: string;
            };
          };
        }>;
      }
    >;
  };
}

function absolutizeWikiUrl(url: string): string {
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `${WIKI_BASE}${url}`;
  return url;
}

function rewriteSrcset(value: string): string[] {
  return value
    .split(",")
    .map(part => {
      const trimmed = part.trim();
      const spaceIdx = trimmed.indexOf(" ");
      if (spaceIdx === -1) return absolutizeWikiUrl(trimmed);
      const url = trimmed.slice(0, spaceIdx);
      return absolutizeWikiUrl(url);
    });
}

const TAB_INDEX_RE = /\btab-(\d+)\b/;
const TAB_HEAD_INDEX_RE = /\btab-head-(\d+)\b/;

function parseIndexFromClassName(className: string | null, re: RegExp): number | null {
  if (!className) return null;
  const m = className.match(re);
  if (!m?.[1]) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function getOrInitMap<K, V>(map: Map<K, V>, key: K, init: () => V): V {
  if (map.has(key)) return map.get(key)!;
  const created = init();
  map.set(key, created);
  return created;
}

function* chunkArray<T>(items: readonly T[], chunkSize: number): Generator<T[]> {
  for (let i = 0; i < items.length; i += chunkSize) {
    yield items.slice(i, i + chunkSize);
  }
}

function* iterInventoryItems(data: InventoryData): Generator<InventoryItem> {
  for (const tab of data.tabs) {
    for (const row of tab.rows) {
      for (const item of row.items) {
        if (item) yield item;
      }
    }
  }
}

function getUniqueItemTitles(data: InventoryData): string[] {
  const titles = new Set<string>();
  for (const item of iterInventoryItems(data)) titles.add(item.title);
  return [...titles];
}

function applyInternalNames(data: InventoryData, names: Map<string, string | null>): void {
  for (const item of iterInventoryItems(data)) {
    item.internalName = names.get(item.title) ?? null;
  }
}

function padItemsToColumns(items: readonly InventoryItem[], columns: number): (InventoryItem | null)[] {
  const padded: (InventoryItem | null)[] = [...items];
  while (padded.length % columns !== 0) {
    padded.push(null);
  }
  return padded;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed (${res.status}) for ${url}`);
  return await res.text();
}

async function parseWikitextToHtml(wikitext: string): Promise<string> {
  const params = new URLSearchParams({
    action: "parse",
    format: "json",
    contentmodel: "wikitext",
    prop: "text",
    disableeditsection: "1",
    disablelimitreport: "1",
    text: wikitext,
  });

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) throw new Error(`MediaWiki parse failed (${res.status})`);

  const json = (await res.json()) as MediaWikiParseResponse;
  if ("error" in json) {
    throw new Error(`MediaWiki parse error: ${json.error.info ?? json.error.code ?? "unknown"}`);
  }

  return json.parse.text["*"];
}

function extractInternalNameFromWikitext(wikitext: string): string | null {
  const match = wikitext.match(/\|internal-name\s*=\s*([^\n|]+)/i);
  return match?.[1]?.trim() ?? null;
}

async function fetchInternalNamesBatch(titles: string[]): Promise<Map<string, string | null>> {
  const result = new Map<string, string | null>();
  if (titles.length === 0) return result;

  const BATCH_SIZE = 50;

  let batchStartIndex = 0;
  for (const batch of chunkArray(titles, BATCH_SIZE)) {
    const infoboxTitles = batch.map(t => `Infobox:${t.replace(/\s/g, "_")}`).join("|");

    const params = new URLSearchParams({
      action: "query",
      prop: "revisions",
      rvslots: "main",
      rvprop: "content",
      format: "json",
      titles: infoboxTitles,
    });

    const res = await fetch(`${API_URL}?${params.toString()}`);
    if (!res.ok) {
      console.warn(`Batch fetch failed (${res.status}) for batch starting at ${batchStartIndex}`);
      for (const t of batch) result.set(t, null);
      batchStartIndex += batch.length;
      continue;
    }

    const json = (await res.json()) as MediaWikiQueryResponse;
    const pages = json.query?.pages ?? {};

    const fetchedMap = new Map<string, string | null>();
    for (const page of Object.values(pages)) {
      const pageTitle = page.title;
      if (!pageTitle) continue;

      const itemTitle = pageTitle.replace(/^Infobox:/i, "");
      const content = page.revisions?.[0]?.slots?.main?.["*"];
      if (content) {
        fetchedMap.set(itemTitle, extractInternalNameFromWikitext(content));
      } else {
        fetchedMap.set(itemTitle, null);
      }
    }

    for (const t of batch) {
      result.set(t, fetchedMap.get(t) ?? null);
    }

    batchStartIndex += batch.length;
  }

  return result;
}

const COLUMNS_PER_ROW = 10;

async function extractInventoryDataFromHtml(html: string): Promise<InventoryData> {
  const tabMeta = new Map<number, { name: string; iconSrc: string; iconSrcset: string[] }>();
  const rowsByTab = new Map<number, InventoryRow[]>();

  const tabStack: number[] = [];
  const tabHeadStack: number[] = [];
  const rowStack: Array<{ tabIndex: number; items: InventoryItem[] }> = [];
  const iconStack: Array<{
    tabIndex: number;
    href: string | null;
    title: string | null;
    imgSrc: string | null;
    imgSrcset: string[];
  }> = [];

  const rewriter = new HTMLRewriter()
    .on("div.inventory div.tab-header div.tab-head", {
      element(el) {
        const idx = parseIndexFromClassName(el.getAttribute("class"), TAB_HEAD_INDEX_RE);
        if (idx === null) return;

        tabHeadStack.push(idx);
        el.onEndTag(() => {
          tabHeadStack.pop();
        });

        const name = el.getAttribute("data-name") ?? "";
        const existing = tabMeta.get(idx);
        tabMeta.set(idx, {
          name,
          iconSrc: existing?.iconSrc ?? "",
          iconSrcset: existing?.iconSrcset ?? [],
        });
      },
    })
    .on("div.inventory div.tab-header div.tab-head img", {
      element(el) {
        const idx = tabHeadStack.at(-1);
        if (idx === undefined) return;

        const src = el.getAttribute("src");
        if (!src) return;

        const srcsetRaw = el.getAttribute("srcset");
        const existing = tabMeta.get(idx);
        tabMeta.set(idx, {
          name: existing?.name ?? "",
          iconSrc: absolutizeWikiUrl(src),
          iconSrcset: srcsetRaw ? rewriteSrcset(srcsetRaw) : [],
        });
      },
    })
    .on("div.inventory div.tab", {
      element(el) {
        const idx = parseIndexFromClassName(el.getAttribute("class"), TAB_INDEX_RE);
        if (idx === null) return;
        tabStack.push(idx);
        el.onEndTag(() => {
          tabStack.pop();
        });
      },
    })
    .on("div.inventory div.tab > div", {
      element(el) {
        const tabIndex = tabStack.at(-1);
        if (tabIndex === undefined) return;
        if (el.getAttribute("class")?.includes("factorio-icon")) return;

        rowStack.push({ tabIndex, items: [] });
        el.onEndTag(() => {
          const row = rowStack.pop();
          if (!row || row.items.length === 0) return;

          const rows = getOrInitMap(rowsByTab, row.tabIndex, () => []);
          rows.push({ items: padItemsToColumns(row.items, COLUMNS_PER_ROW) });
        });
      },
    })
    .on("div.inventory div.tab div.factorio-icon", {
      element(el) {
        const tabIndex = tabStack.at(-1);
        if (tabIndex === undefined) return;

        iconStack.push({ tabIndex, href: null, title: null, imgSrc: null, imgSrcset: [] });
        el.onEndTag(() => {
          const icon = iconStack.pop();
          if (!icon) return;

          if (!icon.title || !icon.href || !icon.imgSrc) return;
          if (icon.title.includes(":")) return;

          const currentRow = rowStack.at(-1);
          if (currentRow && currentRow.tabIndex === icon.tabIndex) {
            currentRow.items.push({
              title: icon.title,
              internalName: null,
              href: icon.href,
              imgSrc: icon.imgSrc,
              imgSrcset: icon.imgSrcset,
            });
          }
        });
      },
    })
    .on("div.inventory div.tab div.factorio-icon a", {
      element(el) {
        const icon = iconStack.at(-1);
        if (!icon) return;

        const href = el.getAttribute("href");
        if (href) icon.href = absolutizeWikiUrl(href);

        const title = el.getAttribute("title");
        if (title) icon.title = title;
      },
    })
    .on("div.inventory div.tab div.factorio-icon img", {
      element(el) {
        const icon = iconStack.at(-1);
        if (!icon) return;

        const src = el.getAttribute("src");
        if (src) icon.imgSrc = absolutizeWikiUrl(src);

        const srcsetRaw = el.getAttribute("srcset");
        if (srcsetRaw) icon.imgSrcset = rewriteSrcset(srcsetRaw);
      },
    });

  await rewriter.transform(new Response(html)).arrayBuffer();

  const maxTabIndex = Math.max(0, ...tabMeta.keys(), ...rowsByTab.keys());
  const tabs: InventoryTab[] = [];

  for (let i = 1; i <= maxTabIndex; i++) {
    const meta = tabMeta.get(i);
    const rows = rowsByTab.get(i) ?? [];
    if (!meta && rows.length === 0) continue;

    tabs.push({
      name: meta?.name ?? `Tab ${i}`,
      iconSrc: meta?.iconSrc ?? "",
      iconSrcset: meta?.iconSrcset ?? [],
      rows,
    });
  }

  return { tabs };
}

async function main(): Promise<void> {
  const outFile = path.join(process.cwd(), "src", "lib", "generated", "inventory-data.ts");

  console.log("Fetching Template:Inventory...");
  const inventoryWikitext = await fetchText(INVENTORY_RAW_URL);
  const inventoryHtml = await parseWikitextToHtml(inventoryWikitext);

  const inventoryData = await extractInventoryDataFromHtml(inventoryHtml);

  const allTitles = getUniqueItemTitles(inventoryData);
  console.log(`Found ${allTitles.length} unique items, fetching internal names...`);
  const internalNames = await fetchInternalNamesBatch(allTitles);
  applyInternalNames(inventoryData, internalNames);

  const outDir = path.dirname(outFile);
  await mkdir(outDir, { recursive: true });

  const output = [
    "export interface InventoryItem {",
    "  title: string;",
    "  internalName: string | null;",
    "  href: string;",
    "  imgSrc: string;",
    "  imgSrcset: string[];",
    "}",
    "",
    "export interface InventoryRow {",
    "  items: (InventoryItem | null)[];",
    "}",
    "",
    "export interface InventoryTab {",
    "  name: string;",
    "  iconSrc: string;",
    "  iconSrcset: string[];",
    "  rows: InventoryRow[];",
    "}",
    "",
    "export interface InventoryData {",
    "  tabs: InventoryTab[];",
    "}",
    "",
    `export const inventoryData: InventoryData = ${JSON.stringify(inventoryData, null, 2)};`,
    "",
  ].join("\n");

  await Bun.write(outFile, output);

  let totalItems = 0;
  for (const tab of inventoryData.tabs) {
    for (const row of tab.rows) {
      totalItems += row.items.filter(Boolean).length;
    }
  }
  console.log(`Wrote ${outFile} (${inventoryData.tabs.length} tabs, ${totalItems} items)`);
}

await main();
