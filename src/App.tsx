/* eslint-disable @typescript-eslint/no-non-null-assertion */
import classNames from 'classnames';
import { JSX, useEffect, useMemo, useState, type ChangeEvent } from 'react';
import { ColorInput } from './components/ColorInput';
import { DraggablePopup } from './components/DraggablePopup';
import { ItemRenderer } from './components/ItemRenderer';
import { PreviewPanel } from './components/PreviewPanel';
import './index.css';
import { getItem, SignalSelector } from './inventory/SignalSelector';
import { addEntity, createEmptyBlueprint, encodePlan, type Comparator, type Icon } from './lib/blueprints';
import { Quality } from './lib/blueprints/quality';
import type { InventoryItem, Item } from './lib/generated/inventory-data';

interface BarPreset {
  emptyChar: string;
  fillChar: string;
  id: string;
  label: string;
}

const BAR_PRESETS: BarPreset[] = [
  { id: 'blocks', label: 'Blocks', fillChar: '▎▌▊█', emptyChar: '░' },
  { id: 'hash', label: 'Hash', fillChar: '#', emptyChar: '-' },
  { id: 'lines', label: 'Lines', fillChar: '━', emptyChar: '─' },
  { id: 'clocks', label: 'Clocks', fillChar: '◔◑◕●', emptyChar: '○' },
];

const DEFAULT_ITEM_NAME = 'automation-science-pack';
const DEFAULT_BAR_COLOR = '#FF0000';
const DEFAULT_EMPTY_CHAR = '░';
const DEFAULT_FILL_SCALE = ['█'];

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;

  return Math.min(max, Math.max(min, Math.floor(n)));
}

function normalizeHex(value: string): string {
  const v = value.trim();
  if (v.length === 0) return DEFAULT_BAR_COLOR;
  if (v.startsWith('#')) return v;

  return `#${v}`;
}

function qualityToTag(quality: Quality | undefined): string {
  if (!quality) return '';

  return `,quality=${quality}`;
}

function makeItemTag(item: Item): string {
  return `[item=${item.internalName}${qualityToTag(item.quality)}]`;
}

function repeatChar(char: string, count: number): string {
  if (count <= 0) return '';

  return char.repeat(count);
}

const MAX_PERCENT = 100;

function splitChars(value: string): string[] {
  return Array.from(value);
}

function toNonWhitespaceChars(value: string): string[] {
  return splitChars(value.trim()).filter(ch => ch.trim().length > 0);
}

function firstNonWhitespaceChar(value: string, fallback: string): string {
  return toNonWhitespaceChars(value)[0] ?? fallback;
}

export function makeBar(
  percent: number,
  maxPercent: number,
  length: number,
  fillScale: string[],
  emptyChar: string,
): string {
  const clampedPercent = clampInt(percent, 0, maxPercent);
  const safeFillScale = fillScale.length > 0 ? fillScale : ['█'];
  const fullChar = safeFillScale[safeFillScale.length - 1] ?? '█';
  const safeEmptyChar = emptyChar || '░';

  const total = (clampedPercent / maxPercent) * length;
  const fullCells = Math.floor(total);
  const remainder = total - fullCells;

  let partial = '';
  if (remainder > 0 && fullCells < length) {
    const scaleSteps = safeFillScale.length;
    const partialIndex = Math.min(scaleSteps - 1, Math.max(0, Math.ceil(remainder * scaleSteps) - 1));
    partial = safeFillScale[partialIndex] ?? '';
  }

  const remaining = length - fullCells - (partial ? 1 : 0);

  return `${repeatChar(fullChar, fullCells)}${partial}${repeatChar(safeEmptyChar, remaining)}`;
}

function makeDisplayPanelText({
  bar,
  colorHex,
  font,
  itemTag,
  percent,
  trailingSpacer,
}: {
  readonly bar: string;
  readonly colorHex: string;
  readonly font: string;
  readonly itemTag: string;
  readonly percent: number;
  readonly trailingSpacer: string;
}): string {
  return `[font=${font}][color=${colorHex}]${itemTag} ${bar}${trailingSpacer}[/color][/font]${percent}%`;
}

type ValueChangeHandler = (value: string) => void;

function handleInputChange(handler: ValueChangeHandler): (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
  return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handler(e.currentTarget.value);
  };
}

function handleSelectChange(handler: ValueChangeHandler): (e: ChangeEvent<HTMLSelectElement>) => void {
  return (e: ChangeEvent<HTMLSelectElement>) => {
    handler(e.currentTarget.value);
  };
}

function Checkbox({
  checked,
  label,
  onChange,
}: {
  readonly checked: boolean;
  readonly label: string;
  onChange(checked: boolean): void;
}): JSX.Element {
  return (
    <label className="checkbox-label">
      <input type="checkbox" name={label} checked={checked} onChange={(e) => { onChange(e.currentTarget.checked); }} />
      <div className="checkbox" />
      <div>{label}</div>
    </label>
  );
}

function inventoryItemToItem(inventoryItem: InventoryItem, quality: Quality = 'normal'): Item {
  return { ...inventoryItem, quality };
}

// eslint-disable-next-line react/no-multi-comp
export function App(): JSX.Element {
  const [conditionItem, setConditionItem] = useState<Item>(inventoryItemToItem(getItem(DEFAULT_ITEM_NAME)!));
  const [textItem, setTextItem] = useState<Item>(inventoryItemToItem(getItem(DEFAULT_ITEM_NAME)!));
  const [syncItems, setSyncItems] = useState(true);
  const [selectorTarget, setSelectorTarget] = useState<'condition' | 'text' | null>(null);
  const [barColorHex, setBarColorHex] = useState(DEFAULT_BAR_COLOR);
  const [barPresetId, setBarPresetId] = useState<string>('blocks');
  const [fillChar, setFillChar] = useState('█');
  const [emptyChar, setEmptyChar] = useState(DEFAULT_EMPTY_CHAR);
  const [barLength, setBarLength] = useState(26);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [font, setFont] = useState('technology-slot-level-font');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [trailingSpacer, setTrailingSpacer] = useState('⠀');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!syncItems) return;
    setTextItem(conditionItem);
  }, [conditionItem, syncItems]);

  function handleSignalSelect(item: InventoryItem, _tab: unknown, quality: Quality): void {
    if (selectorTarget === 'condition') {
      setConditionItem(inventoryItemToItem(item, quality));
    } else if (selectorTarget === 'text') {
      setTextItem(inventoryItemToItem(item, quality));
    }
    setSelectorTarget(null);
  }

  useEffect(() => {
    const preset = BAR_PRESETS.find(p => p.id === barPresetId);
    if (!preset) return;
    setFillChar(preset.fillChar);
    setEmptyChar(preset.emptyChar);
  }, [barPresetId]);

  const recommendedBarLength = useMemo(() => {
    const safeMaxPercent = MAX_PERCENT + 2;
    const fillScaleLength = toNonWhitespaceChars(fillChar).length || 1;

    return Math.ceil(safeMaxPercent / fillScaleLength);
  }, [fillChar]);

  const safeInputs = useMemo(() => {
    const safeBarLength = clampInt(barLength, 1, 120);
    const safeBarColor = normalizeHex(barColorHex);
    const safeFillScale = toNonWhitespaceChars(fillChar);

    return {
      safeBarLength,
      safeBarColor,
      safeFillScale: safeFillScale.length > 0 ? safeFillScale : DEFAULT_FILL_SCALE,
      safeEmptyChar: firstNonWhitespaceChar(emptyChar, DEFAULT_EMPTY_CHAR),
      itemTag: makeItemTag(textItem),
    };
  }, [barColorHex, barLength, textItem, emptyChar, fillChar]);

  const blueprintString = useMemo(() => {
    const comparator: Comparator = '≤';
    const {
      safeBarLength,
      safeBarColor,
      safeFillScale,
      safeEmptyChar,
      itemTag,
    } = safeInputs;

    const blueprint = createEmptyBlueprint();
    blueprint.blueprint.label = `Progress bar: ${textItem.internalName}`;

    const icons: Icon[] = [
      { index: 1, signal: { name: 'display-panel' } },
      { index: 2, signal: { type: 'item', name: textItem.internalName, quality: textItem.quality } },
    ];
    blueprint.blueprint.icons = icons;

    const strategicIndices = Array.from({ length: MAX_PERCENT + 1 }, (_, i) => i).filter(i => i !== 50);

    addEntity(blueprint, {
      name: 'display-panel',
      position: { x: 0, y: 0 },
      always_show: true,
      direction: 8,
      control_behavior: {
        parameters: strategicIndices.map((percent) => {
          const bar = makeBar(percent, MAX_PERCENT, safeBarLength, safeFillScale, safeEmptyChar);

          return {
            text: makeDisplayPanelText({
              bar,
              colorHex: safeBarColor,
              font,
              itemTag,
              percent,
              trailingSpacer,
            }),
            icon: { name: textItem.internalName, quality: textItem.quality },
            condition: {
              comparator,
              constant: percent,
              first_signal: { name: conditionItem.internalName, quality: conditionItem.quality },
            },
          };
        }),
      },
    });

    return encodePlan(blueprint);
  }, [font, safeInputs, trailingSpacer]);

  function copy(): void {
    // eslint-disable-next-line no-void
    void navigator.clipboard.writeText(blueprintString);
    setCopied(true);
    window.setTimeout(() => {
      setCopied(false);
    }, 1200);
  }

  return (
    <div className="container">
      <div className="container-inner">
        <div className="panel">
          <h2>Progress Bar Generator</h2>
          <p>Generates a display panel blueprint with conditional text for each percent.</p>
        </div>

        <div className="panels2">
          <div>
            <div className="panel">
              <h3>Settings</h3>
              <dl className="panel-hole">
                <dt>Condition signal</dt>
                <dd>
                  <button
                    type="button"
                    className={classNames('button square-m', { active: selectorTarget === 'condition' })}
                    onClick={() => { setSelectorTarget('condition'); }}
                    style={{ padding: 4 }}
                  >
                    <ItemRenderer item={conditionItem} />
                  </button>
                </dd>

                <dt>Text signal</dt>
                <dd>
                  <button
                    type="button"
                    className={classNames('button square-m', { disabled: syncItems, active: selectorTarget === 'text' })}
                    disabled={syncItems}
                    onClick={() => { setSelectorTarget('text'); }}
                    style={{ padding: 4 }}
                  >
                    <ItemRenderer item={textItem} />
                  </button>
                </dd>

                <dt>Bar color</dt>
                <dd>
                  <ColorInput value={barColorHex} onChange={setBarColorHex} />
                </dd>

                <dt>Bar length</dt>
                <dd>
                  <input
                    type="number"
                    name="bar-length"
                    value={String(barLength)}
                    onChange={handleInputChange((value) => {
                      if (!isNaN(Number(value)) && value !== '') {
                        const num = value === '' ? 0 : Number(value);
                        setBarLength(num);
                      }
                    })}
                    placeholder="26"
                  />
                  <div className="smaller mt8" title="Based on your fill character to show a different bar per percentage value">Recommended: {recommendedBarLength} ⓘ</div>
                </dd>

                <dt>Bar style</dt>
                <dd>
                  <select
                    className="button"
                    name="bar-style"
                    value={barPresetId}
                    onChange={handleSelectChange(setBarPresetId)}
                  >
                    {BAR_PRESETS.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </dd>

                <dt>Fill char</dt>
                <dd>
                  <input type="text" name="fill-char" value={fillChar} onChange={handleInputChange(setFillChar)} />
                </dd>

                <dt>Empty char</dt>
                <dd>
                  <input type="text" name="empty-char" value={emptyChar} maxLength={1} onChange={handleInputChange(setEmptyChar)} />
                </dd>
              </dl>
              <Checkbox checked={syncItems} onChange={setSyncItems} label="Keep condition item and text item in sync" />
            </div>
          </div>

          <div>
            <PreviewPanel
              barColor={safeInputs.safeBarColor}
              barLength={safeInputs.safeBarLength}
              emptyChar={safeInputs.safeEmptyChar}
              fillScale={safeInputs.safeFillScale}
              item={textItem}
              maxPercent={MAX_PERCENT}
            />

            <div className="panel">
              <h3>Blueprint string</h3>
              <textarea readOnly value={blueprintString} style={{ width: '100%', minHeight: 260, resize: 'vertical' }} />
              <div className="mt8 flex flex-items-center">
                <button type="button" className="button-green" onClick={copy}>
                  {copied ? 'Copied!' : 'Copy to clipboard'}
                </button>
                <div className="ml8 smaller">Paste in Factorio: Ctrl+V</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DraggablePopup isOpen={selectorTarget !== null}>
        {({ isDragging, onDragStart }) => (
          <SignalSelector
            isDragging={isDragging}
            onClose={() => { setSelectorTarget(null); }}
            onDragStart={onDragStart}
            onItemClick={handleSignalSelect}
            selectedItem={conditionItem}
          />
        )}
      </DraggablePopup>
    </div>
  );
}

export default App;
