import classNames from 'classnames';
import { useEffect, useMemo, useRef, useState, type JSX } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import unknownImg from 'static/question-mark.png';
import type { Quality } from '../lib/blueprints/quality';
import { inventoryData, Item, type InventoryItem, type InventoryRow, type InventoryTab } from '../lib/generated/inventory-data';
import './signal-selector.css';

const MAX_COLUMNS_PER_ROW = 10;
const MIN_COLUMNS_PER_ROW = 4;
const MIN_ROWS = 20;

interface QualityOption { icon: string; id: Quality; label: string; }

const QUALITIES: readonly QualityOption[] = [
  { id: 'normal', label: 'Normal', icon: 'https://wiki.factorio.com/images/Quality_normal.png' },
  { id: 'uncommon', label: 'Uncommon', icon: 'https://wiki.factorio.com/images/Quality_uncommon.png' },
  { id: 'rare', label: 'Rare', icon: 'https://wiki.factorio.com/images/Quality_rare.png' },
  { id: 'epic', label: 'Epic', icon: 'https://wiki.factorio.com/images/Quality_epic.png' },
  { id: 'legendary', label: 'Legendary', icon: 'https://wiki.factorio.com/images/Quality_legendary.png' },
];

function padToColumns(items: readonly (InventoryItem | null)[], columns: number): (InventoryItem | null)[] {
  const padded: (InventoryItem | null)[] = [...items];
  while (padded.length % columns !== 0) padded.push(null);

  return padded;
}

function itemMatchesQuery(item: InventoryItem | null, q: string): item is InventoryItem {
  return item !== null
    && (item.title.toLowerCase().includes(q)
      || item.internalName.toLowerCase().includes(q));
}

function tabHasResults(tab: InventoryTab, q: string): boolean {
  if (!q) return true;

  return tab.rows.some(row => row.items.some(item => itemMatchesQuery(item, q)));
}

function trimTrailingNulls(items: readonly (InventoryItem | null)[]): (InventoryItem | null)[] {
  let lastIndex = items.length - 1;
  while (lastIndex >= 0 && items[lastIndex] === null) lastIndex -= 1;

  return items.slice(0, lastIndex + 1);
}

function chunkAndPad(items: readonly (InventoryItem | null)[], columns: number): InventoryRow[] {
  const safeColumns = Math.max(1, columns);
  const rows: InventoryRow[] = [];

  if (items.length === 0) {
    rows.push({ items: Array.from({ length: safeColumns }, () => null) });

    return rows;
  }

  for (let i = 0; i < items.length; i += safeColumns) {
    rows.push({ items: padToColumns(items.slice(i, i + safeColumns).filter((item): item is InventoryItem => item !== null), safeColumns) });
  }

  return rows;
}

function normalizeTabRowsForColumns(tabRows: readonly InventoryRow[], columns: number): InventoryRow[] {
  return tabRows.flatMap((row) => {
    const trimmed = trimTrailingNulls(row.items);
    const safeColumns = Math.max(1, columns);

    if (trimmed.length === 0) {
      return [{ items: Array.from({ length: safeColumns }, () => null) }];
    }

    const chunks: (InventoryItem | null)[][] = [];
    for (let i = 0; i < trimmed.length; i += safeColumns) {
      chunks.push(trimmed.slice(i, i + safeColumns));
    }

    return chunks.map(chunk => ({ items: padToColumns(chunk, safeColumns) }));
  });
}

interface SignalSelectorProps {
  onClose?(): void;
  onDragStart?(e: React.MouseEvent<HTMLDivElement>): void;
  onItemClick?(item: InventoryItem, tab: InventoryTab, quality: Quality): void;
  readonly className?: string;
  readonly isDragging?: boolean;
  readonly selectedItem?: Item;
}

export function getItem(internalName: string): InventoryItem | null {
  return inventoryData.tabs.flatMap(tab => tab.rows.flatMap(row => row.items)).find(item => item?.internalName === internalName) ?? null;
}

export function SignalSelector({ onClose, onDragStart, onItemClick, className, isDragging, selectedItem }: SignalSelectorProps): JSX.Element {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuality, setSelectedQuality] = useState<Quality>(selectedItem?.quality ?? 'normal');
  const [columnsPerRow, setColumnsPerRow] = useState(MAX_COLUMNS_PER_ROW);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualItemName, setManualItemName] = useState('');
  const inventoryRootRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const manualInputRef = useRef<HTMLInputElement>(null);

  const activeTab = inventoryData.tabs[activeTabIndex];
  const trimmedSearchQuery = searchQuery.trim().toLowerCase();

  const tabsWithResults = useMemo(() => {
    return inventoryData.tabs.map(tab => tabHasResults(tab, trimmedSearchQuery));
  }, [trimmedSearchQuery]);

  useEffect(() => {
    if (!trimmedSearchQuery) return;
    if (tabsWithResults[activeTabIndex] ?? false) return;
    const firstTabWithResults = tabsWithResults.findIndex(Boolean);
    if (firstTabWithResults !== -1) {
      setActiveTabIndex(firstTabWithResults);
    }
  }, [trimmedSearchQuery, tabsWithResults, activeTabIndex]);

  // Find the tab containing the selected item and open it
  useEffect(() => {
    if (!selectedItem) return;

    const targetTabIndex = inventoryData.tabs.findIndex(tab =>
      tab.rows.some(row => row.items.some(item => item?.internalName === selectedItem.internalName)));

    if (targetTabIndex !== -1) {
      setActiveTabIndex(targetTabIndex);
      setSearchQuery('');
    }
  }, [selectedItem]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = document.querySelector(`[data-item="${selectedItem?.internalName}"]`);
    if (selectedElement && scrollContainerRef.current) {
      selectedElement.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
    if (searchRef.current) {
      searchRef.current.focus();
    }

    if (!selectedItem) return;

    setManualItemName(selectedItem.internalName);
    const existingItem = getItem(selectedItem.internalName);
    if (!existingItem) {
      setShowManualInput(true);
      if (manualInputRef.current) {
        manualInputRef.current.focus();
      }
    }

    // If item can't be found in inventory we open the manual input
  }, [scrollContainerRef.current, selectedItem]);

  useEffect(() => {
    function updateColumns(): void {
      const root = inventoryRootRef.current;
      const slotsEl = slotsRef.current;
      if (!root || !slotsEl) return;

      const rootStyles = window.getComputedStyle(root);
      const slotSize = Number.parseFloat(rootStyles.getPropertyValue('--inventory-slot-size')) || 42;
      const slotMargin = Number.parseFloat(rootStyles.getPropertyValue('--inventory-slot-margin')) || 1;
      const slotOuterWidth = slotSize + (slotMargin * 2);
      const availableWidth = slotsEl.clientWidth;

      const computed = Math.floor((availableWidth + 0.01) / slotOuterWidth);
      const clamped = Math.max(MIN_COLUMNS_PER_ROW, Math.min(MAX_COLUMNS_PER_ROW, computed));
      setColumnsPerRow(clamped);
    }

    updateColumns();

    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(() => { updateColumns(); });

    const slotsEl = slotsRef.current;
    if (resizeObserver && slotsEl) {
      resizeObserver.observe(slotsEl);
    }
    window.addEventListener('resize', updateColumns);

    return (): void => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        if (document.activeElement !== searchRef.current) {
          e.preventDefault();
          searchRef.current?.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filteredRows = useMemo<InventoryRow[]>(() => {
    if (!activeTab) return [];
    let newRows: InventoryRow[];
    if (trimmedSearchQuery) {
      newRows = activeTab.rows
        .map(row => row.items.filter((item): item is InventoryItem => itemMatchesQuery(item, trimmedSearchQuery)))
        .filter(items => items.length > 0)
        .flatMap(items => chunkAndPad(items, columnsPerRow));
    } else {
      newRows = normalizeTabRowsForColumns(activeTab.rows, columnsPerRow);
    }

    while (newRows.length < MIN_ROWS) {
      newRows.push({ items: Array.from({ length: columnsPerRow }, () => null) });
    }

    return newRows;
  }, [activeTab, trimmedSearchQuery, columnsPerRow]);

  function handleItemClick(item: InventoryItem): void {
    if (!activeTab) return;
    onItemClick?.(item, activeTab, selectedQuality);
  }

  function handleManualItem(): void {
    const trimmedName = manualItemName.trim();
    if (trimmedName && activeTab) {
      const item = getItem(trimmedName) ?? {
        internalName: trimmedName,
        title: trimmedName,
        imgSrc: unknownImg,
      };
      handleItemClick(item);
      setManualItemName('');
      setShowManualInput(false);
    }
  }

  function handleTabClick(tabIndex: number): void {
    setActiveTabIndex(tabIndex);
    scrollContainerRef.current?.scrollTo({ top: 0 });
  }

  return (
    <div
      ref={inventoryRootRef}
      className={classNames('panel inventory m0', className)}
      style={{ width: 'min(500px, calc(100vw - 16px))' }}
    >
      {/* Header - draggable */}
      <div
        className="flex flex-space-between flex-items-center mb8"
        onMouseDown={onDragStart}
        style={{ cursor: isDragging === true ? 'grabbing' : 'grab', userSelect: 'none' }}
      >
        <h2 className="m0" style={{ marginBottom: 0 }}>Select a signal</h2>
        <div className="flex flex-items-center" style={{ gap: 8 }}>
          <div style={{ position: 'relative' }}>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); }}
              onMouseDown={(e) => { e.stopPropagation(); }}
              style={{ width: 'clamp(110px, 30vw, 140px)', paddingRight: 28, color: 'black' }}
              ref={searchRef}
              aria-label="Search signals"
            />
            <span
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#5a5a5a',
                pointerEvents: 'none',
              }}
            >
              🔍
            </span>
          </div>
          {onClose && (
            <button
              type="button"
              className="button square-sm"
              onClick={onClose}
              onMouseDown={(e) => { e.stopPropagation(); }}
              aria-label="Close signal selector"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Tab buttons */}
      <div className="panel-inset flex flex-wrap" style={{ height: 'auto', padding: 0, marginBottom: 8, borderImageOutset: 0, backgroundClip: 'content-box' /* width: 'calc(100% + 6px)', transform: 'translateX(-3px)' */ }}>
        {inventoryData.tabs.map((tab, idx) => {
          const hasResults = tabsWithResults[idx] ?? false;
          const isActive = idx === activeTabIndex;
          const tabClass = classNames('button square-l ml0', { active: isActive, disabled: !hasResults });

          return (
            <button
              type="button"
              key={tab.name}
              className={tabClass}
              title={tab.name}
              onClick={() => {
                if (hasResults) handleTabClick(idx);
              }}
            >
              <img
                alt={tab.name}
                src={tab.iconSrc}
                decoding="async"
              />
            </button>
          );
        })}
        <div className="slot" style={{ flex: 'unset', width: 'var(--inventory-tab-placeholder-size)', height: 'var(--inventory-tab-placeholder-size)' }}>
          <div className="slot-empty" />
        </div>
      </div>

      {/* Items grid */}
      <div
        ref={scrollContainerRef}
        className="panel-inset"
        style={{
          padding: 4,
          minHeight: 200,
          maxHeight: 'min(500px, 60vh)',
          overflowY: 'auto',
        }}
      >
        <div
          ref={slotsRef}
          className="slots slots-wrap"
          style={{
            height: 'auto',
            justifyContent: 'flex-start',
          }}
        >
          {filteredRows.flatMap((row, rowIdx) =>
            row.items.map((item, colIdx) =>
              (item
                ? (
                    <button
                      type="button"
                      key={item.internalName}
                      className="slot"
                      data-item={item.internalName}
                      title={item.title}
                      onClick={() => { handleItemClick(item); }}
                      style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}
                    >
                      <div className={classNames('slot-button', { selected: selectedItem?.internalName === item.internalName })}>
                        <img className="inventory-image" alt={item.title} src={item.imgSrc} decoding="async" />
                      </div>
                    </button>
                  )
                : (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={`empty-${rowIdx}-${colIdx}`} className="slot">
                      <div className="slot-empty" />
                    </div>
                  ))))}
        </div>
        {filteredRows.flatMap(row => row.items).filter(Boolean).length === 0 && (
          <div className="no-items-found">
            No items found
          </div>
        )}
      </div>

      {/* Quality selector */}
      <div
        className="panel-inset flex flex-space-between flex-items-center"
        style={{ height: 'auto', padding: 4, marginTop: 8 }}
      >
        <div>
          {QUALITIES.map((q) => {
            const isSelected = selectedQuality === q.id;

            return (
              <button
                type="button"
                key={q.id}
                className={classNames('button square-sm ml0', { active: isSelected })}
                title={q.label}
                onClick={() => { setSelectedQuality(q.id); }}
                style={{ width: 'var(--inventory-quality-size)', height: 'var(--inventory-quality-size)', flexBasis: 'var(--inventory-quality-size)', padding: 'var(--inventory-quality-padding)' }}
              >
                <img alt={q.label} src={q.icon} decoding="async" />
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <button
            className="button square-sm"
            onClick={() => { setShowManualInput(!showManualInput); }}
            type="button"
            style={{ color: '#EEEEEE' }}
            title="Enter item name manually"
            aria-label="Toggle manual item name input"
          >
            <BsQuestionCircle />
          </button>
          {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
          <button className="button-green square-sm" onClick={() => { selectedItem !== undefined && handleItemClick(selectedItem); }} type="submit" style={{ color: '#EEEEEE' }} aria-label="Confirm selection">
            <ImCheckmark />
          </button>
        </div>
      </div>

      {/* Manual item name input */}
      {showManualInput && (
        <div className="panel-inset" style={{ padding: 8, marginTop: 8 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Enter item name..."
              value={manualItemName}
              onChange={(e) => { setManualItemName(e.target.value); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleManualItem();
                }
              }}
              style={{ flex: 1, color: 'black' }}
              ref={manualInputRef}
              autoFocus
              aria-label="Manual item name"
            />
            <button
              type="submit"
              className="button-green square-sm"
              onClick={handleManualItem}
              style={{ color: '#EEEEEE' }}
              aria-label="Confirm item name"
            >
              <ImCheckmark />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
