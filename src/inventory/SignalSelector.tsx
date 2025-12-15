import { useEffect, useMemo, useState, type JSX } from "react";
import { Quality } from "../lib/blueprints/quality";
import { inventoryData, type InventoryItem, type InventoryTab } from "../lib/generated/inventory-data";
import './signal-selector.css';

const COLUMNS_PER_ROW = 10;

const QUALITIES: { id: Quality; color: string; label: string, icon: string }[] = [
  { id: "normal", color: "#9d9d9d", label: "Normal", icon: "https://wiki.factorio.com/images/Quality_normal.png" },
  { id: "uncommon", color: "#51d254", label: "Uncommon", icon: "https://wiki.factorio.com/images/Quality_uncommon.png" },
  { id: "rare", color: "#52b1f6", label: "Rare", icon: "https://wiki.factorio.com/images/Quality_rare.png" },
  { id: "epic", color: "#a249e6", label: "Epic", icon: "https://wiki.factorio.com/images/Quality_epic.png" },
  { id: "legendary", color: "#f29f24", label: "Legendary", icon: "https://wiki.factorio.com/images/Quality_legendary.png" },
];

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

  const filteredRows = useMemo(() => {
    if (!activeTab) return [];
    if (!trimmedSearchQuery) return activeTab.rows;

    const newRows = activeTab.rows
      .map(row => ({
        items: row.items.filter(item => itemMatchesQuery(item, trimmedSearchQuery)),
      }))
      .filter(row => row.items.length > 0);
    return newRows.map((row) => {
      const paddedItems: (InventoryItem | null)[] = [...row.items];
      while (paddedItems.length % COLUMNS_PER_ROW != 0) paddedItems.push(null);
      return { ...row, items: paddedItems };
    });
  }, [activeTab, trimmedSearchQuery]);

  return (
    <div className={`panel inventory ${className ?? ""}`}>
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
      <div className="panel-inset flex" style={{ height: "auto", padding: 0, marginBottom: 8, borderImageOutset: 0, backgroundClip: 'content-box' }}>
        {inventoryData.tabs.map((tab, idx) => {
          const hasResults = tabsWithResults[idx];
          const isActive = idx === activeTabIndex;
          return (
            <div
              key={tab.name}
              className={`button square-l ml0 ${isActive ? 'active' : ''} ${!hasResults ? 'disabled' : ''}`}
              title={tab.name}
              onClick={() => hasResults && setActiveTabIndex(idx)}
            >
              {tab.iconSrc ? (
                <img
                  alt={tab.name}
                  src={tab.iconSrcset[1]}
                  decoding="async"
                />
              ) : (
                <span style={{ fontSize: 12 }}>{tab.name.slice(0, 2)}</span>
              )}
            </div>
          );
        })}
        <div className="slot" style={{ flex: 'unset', width: 76, height: 76}}>
          <div className="slot-empty"></div>
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
          {filteredRows.map((row, rowIdx) => (
            row.items.map((item, colIdx) => (
              item ? (
                <div
                  key={item.internalName ?? item.title}
                  className="slot"
                  title={item.title}
                  onClick={() => onItemClick?.(item, activeTab!, selectedQuality)}
                >
                  <div className="slot-button">
                    <img
                      alt={item.title}
                      src={item.imgSrcset[0]}
                      decoding="async"
                    />
                  </div>
                </div>
              ) : (
                <div key={`empty-${rowIdx}-${colIdx}`} className="slot">
                  <div className="slot-empty" />
                </div>
              )
            ))
          ))}
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
            className={`button square-sm ml0 ${isSelected ? "active" : ""}`}
            title={q.label}
            onClick={() => setSelectedQuality(q.id)}
            style={{ width: 32, height: 32, flexBasis: 32, padding: 5 }}
          >
            <img alt={q.label} src={q.icon} decoding="async" />
          </div>
        )})}
      </div>
    </div>
  );
}
