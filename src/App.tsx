import { JSX, useEffect, useMemo, useState, type ChangeEvent } from 'react';
import './index.css';
import { SignalSelector } from './inventory/SignalSelector';
import { addEntity, createEmptyBlueprint, encodePlan, type Comparator, type Icon } from './lib/blueprints';
import { Quality } from './lib/blueprints/quality';

interface BarPreset {
  emptyChar: string;
  fillChar: string;
  id: string;
  label: string;
}

const BAR_PRESETS: BarPreset[] = [
  { id: 'blocks', label: 'Blocks', fillChar: '▎▌▊█', emptyChar: '░' },
  { id: 'dots', label: 'Dots', fillChar: '●', emptyChar: '○' },
  { id: 'hash', label: 'Hash', fillChar: '#', emptyChar: '-' },
  { id: 'lines', label: 'Lines', fillChar: '━', emptyChar: '─' },
  { id: 'clocks', label: 'Clocks', fillChar: '◔◑◕●', emptyChar: '░' },
];

const DEFAULT_ITEM_NAME = 'automation-science-pack';
const DEFAULT_BAR_COLOR = '#ff0000';
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

function makeItemTag(itemName: string, quality: Quality | undefined): string {
  return `[item=${itemName}${qualityToTag(quality)}]`;
}

function repeatChar(char: string, count: number): string {
  if (count <= 0) return '';

  return char.repeat(count);
}

function splitChars(value: string): string[] {
  return Array.from(value);
}

function toNonWhitespaceChars(value: string): string[] {
  return splitChars(value.trim()).filter(ch => ch.trim().length > 0);
}

function firstNonWhitespaceChar(value: string, fallback: string): string {
  return toNonWhitespaceChars(value)[0] ?? fallback;
}

function makeBar(
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
  return `[font=${font}][color=${colorHex}]${itemTag}${bar}${trailingSpacer}[/color][/font]${percent}%`;
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
      <input type="checkbox" checked={checked} onChange={(e) => { onChange(e.currentTarget.checked); }} />
      <div className="checkbox" />
      <div>{label}</div>
    </label>
  );
}

// eslint-disable-next-line react/no-multi-comp
export function App(): JSX.Element {
  const [conditionItemName, setConditionItemName] = useState(DEFAULT_ITEM_NAME);
  const [textItemName, setTextItemName] = useState(DEFAULT_ITEM_NAME);
  const [syncItems, setSyncItems] = useState(true);
  const [quality, setQuality] = useState<Quality | undefined>('normal');
  const [barColorHex, setBarColorHex] = useState(DEFAULT_BAR_COLOR);
  const [barPresetId, setBarPresetId] = useState<string>('blocks');
  const [fillChar, setFillChar] = useState('█');
  const [emptyChar, setEmptyChar] = useState(DEFAULT_EMPTY_CHAR);
  const [barLength, setBarLength] = useState(26);
  const [maxPercent, setMaxPercent] = useState(100);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [font, setFont] = useState('technology-slot-level-font');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [trailingSpacer, setTrailingSpacer] = useState('⠀');
  const [previewPercent, setPreviewPercent] = useState(42);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!syncItems) return;
    setTextItemName(conditionItemName);
  }, [conditionItemName, syncItems]);

  useEffect(() => {
    const preset = BAR_PRESETS.find(p => p.id === barPresetId);
    if (!preset) return;
    setFillChar(preset.fillChar);
    setEmptyChar(preset.emptyChar);
  }, [barPresetId]);

  const recommendedBarLength = useMemo(() => {
    const safeMaxPercent = clampInt(maxPercent + 2, 1, 1000);
    const fillScaleLength = toNonWhitespaceChars(fillChar).length || 1;

    return Math.ceil(safeMaxPercent / fillScaleLength);
  }, [fillChar, maxPercent]);

  const safeInputs = useMemo(() => {
    const safeMaxPercent = clampInt(maxPercent, 1, 1000);
    const safeBarLength = clampInt(barLength, 1, 120);
    const safeBarColor = normalizeHex(barColorHex);
    const safeFillScale = toNonWhitespaceChars(fillChar);
    const safeConditionItem = conditionItemName.trim() || DEFAULT_ITEM_NAME;
    const safeTextItem = (syncItems ? safeConditionItem : textItemName.trim()) || safeConditionItem;

    return {
      safeMaxPercent,
      safeBarLength,
      safeBarColor,
      safeFillScale: safeFillScale.length > 0 ? safeFillScale : DEFAULT_FILL_SCALE,
      safeEmptyChar: firstNonWhitespaceChar(emptyChar, DEFAULT_EMPTY_CHAR),
      safeConditionItem,
      safeTextItem,
      itemTag: makeItemTag(safeTextItem, quality),
    };
  }, [barColorHex, barLength, conditionItemName, emptyChar, fillChar, maxPercent, quality, syncItems, textItemName]);

  const blueprintString = useMemo(() => {
    const comparator: Comparator = '≤';
    const {
      safeMaxPercent,
      safeBarLength,
      safeBarColor,
      safeFillScale,
      safeEmptyChar,
      safeConditionItem,
      safeTextItem,
      itemTag,
    } = safeInputs;

    const blueprint = createEmptyBlueprint();
    blueprint.blueprint.label = `Progress bar: ${safeTextItem}`;

    const icons: Icon[] = [
      { index: 1, signal: { name: 'display-panel' } },
      { index: 2, signal: { type: 'item', name: safeTextItem, quality } },
    ];
    blueprint.blueprint.icons = icons;

    addEntity(blueprint, {
      name: 'display-panel',
      position: { x: 0, y: 0 },
      always_show: true,
      direction: 8,
      control_behavior: {
        parameters: Array.from({ length: safeMaxPercent + 1 }, (_, percent) => {
          const bar = makeBar(percent, safeMaxPercent, safeBarLength, safeFillScale, safeEmptyChar);

          return {
            text: makeDisplayPanelText({
              bar,
              colorHex: safeBarColor,
              font,
              itemTag,
              percent,
              trailingSpacer,
            }),
            icon: { name: safeTextItem, quality },
            condition: {
              comparator,
              constant: percent,
              first_signal: { name: safeConditionItem, quality },
            },
          };
        }),
      },
    });

    return encodePlan(blueprint);
  }, [font, quality, safeInputs, trailingSpacer]);

  const previewText = useMemo(() => {
    const { safeMaxPercent, safeBarLength, safeBarColor, safeFillScale, safeEmptyChar, itemTag } = safeInputs;
    const safePercent = clampInt(previewPercent, 0, safeMaxPercent);
    const bar = makeBar(safePercent, safeMaxPercent, safeBarLength, safeFillScale, safeEmptyChar);

    return makeDisplayPanelText({
      bar,
      colorHex: safeBarColor,
      font,
      itemTag,
      percent: safePercent,
      trailingSpacer,
    });
  }, [font, previewPercent, safeInputs, trailingSpacer]);

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
                <dt>Condition item</dt>
                <dd>
                  <input
                    type="text"
                    value={conditionItemName}
                    onChange={(e) => { setConditionItemName(e.currentTarget.value); }}
                    placeholder="automation-science-pack"
                  />
                </dd>

                <dt>Text item</dt>
                <dd>
                  <input
                    type="text"
                    value={textItemName}
                    onChange={(e) => { setTextItemName(e.currentTarget.value); }}
                    disabled={syncItems}
                    placeholder="automation-science-pack"
                  />
                </dd>

                <dt>Quality</dt>
                <dd>
                  <select
                    className="button"
                    value={quality ?? ''}
                    onChange={handleSelectChange((value) => { setQuality(value as Quality); })}
                  >
                    <option value="">none</option>
                    <option value="normal">normal</option>
                    <option value="uncommon">uncommon</option>
                    <option value="rare">rare</option>
                    <option value="epic">epic</option>
                    <option value="legendary">legendary</option>
                  </select>
                </dd>

                <dt>Bar color</dt>
                <dd>
                  <input
                    type="text"
                    value={barColorHex}
                    onChange={handleInputChange(setBarColorHex)}
                    placeholder="#ff0000"
                  />
                </dd>

                <dt>Bar length</dt>
                <dd>
                  <input
                    type="text"
                    value={String(barLength)}
                    onChange={handleInputChange((value) => { setBarLength(Number(value)); })}
                    placeholder="28"
                  />
                  <div className="smaller mt8">Recommended: {recommendedBarLength}</div>
                </dd>

                <dt>Max percent</dt>
                <dd>
                  <input
                    type="text"
                    value={String(maxPercent)}
                    onChange={handleInputChange((value) => { setMaxPercent(Number(value)); })}
                    placeholder="100"
                  />
                </dd>

                <dt>Bar style</dt>
                <dd>
                  <select
                    className="button"
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
                  <input type="text" value={fillChar} onChange={handleInputChange(setFillChar)} />
                </dd>

                <dt>Empty char</dt>
                <dd>
                  <input type="text" value={emptyChar} onChange={handleInputChange(setEmptyChar)} />
                </dd>
              </dl>
              <Checkbox checked={syncItems} onChange={setSyncItems} label="Keep condition item and text item in sync" />
            </div>

            <div className="panel">
              <h3>Preview</h3>
              <dl className="panel-hole">
                <dt>Preview percent</dt>
                <dd>
                  <input
                    type="range"
                    value={String(previewPercent)}
                    onChange={handleInputChange((value) => { setPreviewPercent(Number(value)); })}
                    placeholder="42"
                    min={0}
                    max={maxPercent}
                  />
                  <input
                    type="text"
                    value={String(previewPercent)}
                    onChange={handleInputChange((value) => { setPreviewPercent(Number(value)); })}
                    placeholder="42"
                    min={0}
                    max={maxPercent}
                  />
                </dd>
              </dl>
              <div className="panel-hole">
                <div className="panel-hole-inner">
                  <pre style={{ margin: 0 }}>{previewText}</pre>
                </div>
              </div>
            </div>
          </div>

          <div>
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
      <SignalSelector />
    </div>
  );
}

export default App;
