import classNames from "classnames";
import { useEffect, useMemo, useState, type JSX } from "react";
import type { Quality } from "../lib/blueprints/quality";
import { inventoryData, type InventoryItem, type InventoryRow, type InventoryTab } from "../lib/generated/inventory-data";
import "./signal-selector.css";

const COLUMNS_PER_ROW = 10;

type QualityOption = { id: Quality; color: string; label: string; icon: string };

const QUALITIES: readonly QualityOption[] = [
  { id: "normal", color: "#9d9d9d", label: "Normal", icon: "https://wiki.factorio.com/images/Quality_normal.png" },
  { id: "uncommon", color: "#51d254", label: "Uncommon", icon: "https://wiki.factorio.com/images/Quality_uncommon.png" },
  { id: "rare", color: "#52b1f6", label: "Rare", icon: "https://wiki.factorio.com/images/Quality_rare.png" },
  { id: "epic", color: "#a249e6", label: "Epic", icon: "https://wiki.factorio.com/images/Quality_epic.png" },
  { id: "legendary", color: "#f29f24", label: "Legendary", icon: "https://wiki.factorio.com/images/Quality_legendary.png" },
];

function padToColumns(items: readonly InventoryItem[], columns: number): (InventoryItem | null)[] {
  const padded: (InventoryItem | null)[] = [...items];
  while (padded.length % columns !== 0) padded.push(null);
  return padded;
}

function getTabIconSrc(tab: InventoryTab): string | null {
  return tab.iconSrcset[1] ?? tab.iconSrcset[0] ?? tab.iconSrc ?? null;
}

function getItemIconSrc(item: InventoryItem): string {
  return item.imgSrcset[0] ?? item.imgSrc;
}

function itemMatchesQuery(item: InventoryItem | null, q: string): item is InventoryItem {
  return item !== null &&
    (item.title.toLowerCase().includes(q) ||
      (item.internalName?.toLowerCase().includes(q) ?? false));
}

function tabHasResults(tab: InventoryTab, q: string): boolean {
  if (!q) return true;
  return tab.rows.some(row => row.items.some(item => itemMatchesQuery(item, q)));
}

type SignalSelectorProps = {
  onItemClick?: (item: InventoryItem, tab: InventoryTab, quality: Quality) => void;
  className?: string;
};

export function SignalSelector({ onItemClick, className }: SignalSelectorProps): JSX.Element {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuality, setSelectedQuality] = useState<Quality>("normal");

  const activeTab = inventoryData.tabs[activeTabIndex];
  const trimmedSearchQuery = searchQuery.trim().toLowerCase();

  const tabsWithResults = useMemo(() => {
    return inventoryData.tabs.map(tab => tabHasResults(tab, trimmedSearchQuery));
  }, [trimmedSearchQuery]);

  useEffect(() => {
    if (!trimmedSearchQuery) return;
    if (tabsWithResults[activeTabIndex]) return;
    const firstTabWithResults = tabsWithResults.findIndex(Boolean);
    if (firstTabWithResults !== -1) {
      setActiveTabIndex(firstTabWithResults);
    }
  }, [trimmedSearchQuery, tabsWithResults, activeTabIndex]);

  const filteredRows = useMemo<InventoryRow[]>(() => {
    if (!activeTab) return [];
    if (!trimmedSearchQuery) return activeTab.rows;

    return activeTab.rows
      .map(row => row.items.filter((item): item is InventoryItem => itemMatchesQuery(item, trimmedSearchQuery)))
      .filter(items => items.length > 0)
      .map(items => ({ items: padToColumns(items, COLUMNS_PER_ROW) }));
  }, [activeTab, trimmedSearchQuery]);

  const handleItemClick = (item: InventoryItem): void => {
    if (!activeTab) return;
    onItemClick?.(item, activeTab, selectedQuality);
  };

  return (
    <div className={classNames("panel inventory", className)}>
      {/* Header */}
      <div className="flex flex-space-between flex-items-center mb8">
        <h2 className="m0" style={{ marginBottom: 0 }}>Select a signal</h2>
        <div className="flex flex-items-center" style={{ gap: 8 }}>
          <div style={{ position: "relative" }}>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: 140, paddingRight: 28 }}
            />
            <span
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#5a5a5a",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* Tab buttons */}
      <div className="panel-inset flex" style={{ height: "auto", padding: 0, marginBottom: 8, borderImageOutset: 0, backgroundClip: "content-box" }}>
        {inventoryData.tabs.map((tab, idx) => {
          const hasResults = tabsWithResults[idx];
          const isActive = idx === activeTabIndex;
          const tabIconSrc = getTabIconSrc(tab);
          const tabClass = classNames("button square-l ml0", { "active": isActive, "disabled": !hasResults });
          return (
            <div
              key={tab.name}
              className={tabClass}
              title={tab.name}
              onClick={() => {
                if (hasResults) setActiveTabIndex(idx);
              }}
            >
              {tabIconSrc ? (
                <img
                  alt={tab.name}
                  src={tabIconSrc}
                  decoding="async"
                />
              ) : (
                <span style={{ fontSize: 12 }}>{tab.name.slice(0, 2)}</span>
              )}
            </div>
          );
        })}
        <div className="slot" style={{ flex: "unset", width: 76, height: 76 }}>
          <div className="slot-empty" />
        </div>
      </div>

      {/* Items grid */}
      <div
        className="panel-inset"
        style={{
          padding: 4,
          minHeight: 200,
          maxHeight: 400,
          overflowY: "auto",
        }}
      >
        <div
          className="slots slots-wrap"
          style={{
            height: "auto",
            justifyContent: "flex-start",
          }}
        >
          {filteredRows.flatMap((row, rowIdx) =>
            row.items.map((item, colIdx) =>
              item ? (
                <div
                  key={item.internalName ?? item.title}
                  className="slot"
                  title={item.title}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="slot-button">
                    <img alt={item.title} src={getItemIconSrc(item)} decoding="async" />
                  </div>
                </div>
              ) : (
                <div key={`empty-${rowIdx}-${colIdx}`} className="slot">
                  <div className="slot-empty" />
                </div>
              )
            )
          )}
          {filteredRows.length === 0 && (
            <div style={{ padding: 16, color: "#888", textAlign: "center", width: "100%" }}>
              No items found
            </div>
          )}
        </div>
      </div>

      {/* Quality selector */}
      <div
        className="panel-inset"
        style={{ height: "auto", padding: 4, marginTop: 8, justifyContent: "flex-start" }}
      >
        {QUALITIES.map(q => {
          const isSelected = selectedQuality === q.id;
          return (
            <div
              key={q.id}
              className={classNames("button square-sm ml0", { "active": isSelected })}
              title={q.label}
              onClick={() => setSelectedQuality(q.id)}
              style={{ width: 32, height: 32, flexBasis: 32, padding: 5 }}
            >
              <img alt={q.label} src={q.icon} decoding="async" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
