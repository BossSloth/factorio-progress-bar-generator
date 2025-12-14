import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { addEntity, createEmptyBlueprint, encodePlan, type Comparator, type Icon, type Signal } from './lib/blueprints';

type Quality = Signal['quality'];

type BarPreset = {
	id: string;
	label: string;
	fillChar: string;
	emptyChar: string;
};

const BAR_PRESETS: BarPreset[] = [
	{ id: 'blocks', label: 'Blocks', fillChar: '▎▌▊█', emptyChar: '░' },
	{ id: 'dots', label: 'Dots', fillChar: '●', emptyChar: '○' },
	{ id: 'hash', label: 'Hash', fillChar: '#', emptyChar: '-' },
	{ id: 'lines', label: 'Lines', fillChar: '━', emptyChar: '─' },
  { id: 'clocks', label: 'Clocks', fillChar: '◔◑◕●', emptyChar: '░' },
];

const clampInt = (n: number, min: number, max: number): number => {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, Math.floor(n)));
};

const normalizeHex = (value: string): string => {
	const v = value.trim();
	if (v.length === 0) return '#ff0000';
	if (v.startsWith('#')) return v;
	return `#${v}`;
};

const qualityToTag = (quality: Quality): string => {
	if (!quality) return '';
	return `,quality=${quality}`;
};

const makeItemTag = (itemName: string, quality: Quality): string => {
	return `[item=${itemName}${qualityToTag(quality)}]`;
};

const repeatChar = (char: string, count: number): string => {
	if (count <= 0) return '';
	return char.repeat(count);
};

const splitChars = (value: string): string[] => Array.from(value);

const makeBar = (
	percent: number,
	maxPercent: number,
	length: number,
	fillScale: string[],
	emptyChar: string
): string => {
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
};

const makeDisplayPanelText = (args: {
	bar: string;
	colorHex: string;
	font: string;
	itemTag: string;
	percent: number;
	trailingSpacer: string;
}): string => {
	return `[font=${args.font}][color=${args.colorHex}]${args.itemTag}${args.bar}${args.trailingSpacer}[/color][/font]${args.percent}%`;
};

const Checkbox = (props: {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label: string;
}) => {
	return (
		<label className="checkbox-label">
			<input type="checkbox" checked={props.checked} onChange={e => props.onChange(e.currentTarget.checked)} />
			<div className="checkbox" />
			<div>{props.label}</div>
		</label>
	);
};

export function App() {
	const [conditionItemName, setConditionItemName] = useState('automation-science-pack');
	const [textItemName, setTextItemName] = useState('automation-science-pack');
	const [syncItems, setSyncItems] = useState(true);
	const [quality, setQuality] = useState<Quality>('uncommon');
	const [barColorHex, setBarColorHex] = useState('#ff0000');
	const [barPresetId, setBarPresetId] = useState<string>('blocks');
	const [fillChar, setFillChar] = useState('█');
	const [emptyChar, setEmptyChar] = useState('░');
	const [barLength, setBarLength] = useState(28);
	const [maxPercent, setMaxPercent] = useState(100);
	const [font, setFont] = useState('technology-slot-level-font');
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
		const safeMaxPercent = clampInt(maxPercent+2, 1, 1000);
		const fillScaleLength = splitChars(fillChar.trim()).filter(ch => ch.trim().length > 0).length || 1;
		return Math.ceil(safeMaxPercent / fillScaleLength);
	}, [fillChar, maxPercent]);

	const blueprintString = useMemo(() => {
		const comparator: Comparator = '≤';
		const safeMaxPercent = clampInt(maxPercent, 1, 1000);
		const safeBarLength = clampInt(barLength, 1, 120);

		const safeBarColor = normalizeHex(barColorHex);
		const safeFillScale = splitChars(fillChar.trim()).filter(ch => ch.trim().length > 0);
		const safeEmptyChar = (splitChars(emptyChar.trim()).find(ch => ch.trim().length > 0) ?? '░');
		const safeConditionItem = conditionItemName.trim() || 'automation-science-pack';
		const safeTextItem = (syncItems ? safeConditionItem : textItemName.trim()) || safeConditionItem;
		const itemTag = makeItemTag(safeTextItem, quality);

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
	}, [barColorHex, barLength, conditionItemName, emptyChar, fillChar, font, maxPercent, previewPercent, quality, syncItems, textItemName, trailingSpacer]);

	const previewText = useMemo(() => {
		const safeMaxPercent = clampInt(maxPercent, 1, 1000);
		const safeBarLength = clampInt(barLength, 1, 120);
		const safePercent = clampInt(previewPercent, 0, safeMaxPercent);
		const safeBarColor = normalizeHex(barColorHex);
		const safeFillScale = splitChars(fillChar.trim()).filter(ch => ch.trim().length > 0);
		const safeEmptyChar = (splitChars(emptyChar.trim()).find(ch => ch.trim().length > 0) ?? '░');
		const safeConditionItem = conditionItemName.trim() || 'automation-science-pack';
		const safeTextItem = (syncItems ? safeConditionItem : textItemName.trim()) || safeConditionItem;
		const itemTag = makeItemTag(safeTextItem, quality);
		const bar = makeBar(safePercent, safeMaxPercent, safeBarLength, safeFillScale, safeEmptyChar);
		return makeDisplayPanelText({
			bar,
			colorHex: safeBarColor,
			font,
			itemTag,
			percent: safePercent,
			trailingSpacer,
		});
	}, [barColorHex, barLength, conditionItemName, emptyChar, fillChar, font, maxPercent, previewPercent, quality, syncItems, textItemName, trailingSpacer]);

	const copy = async () => {
		await navigator.clipboard.writeText(blueprintString);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1200);
	};

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
										onChange={e => setConditionItemName(e.currentTarget.value)}
										placeholder="automation-science-pack"
									/>
								</dd>

								<dt>Text item</dt>
								<dd>
									<input
										type="text"
										value={textItemName}
										onChange={e => setTextItemName(e.currentTarget.value)}
										disabled={syncItems}
										placeholder="automation-science-pack"
									/>
								</dd>

								<dt>Quality</dt>
								<dd>
									<select
										className="button"
										value={quality ?? ''}
										onChange={e => setQuality((e.currentTarget.value || undefined) as Quality)}
									>
										<option value="">none</option>
										<option value="common">common</option>
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
										onChange={e => setBarColorHex(e.currentTarget.value)}
										placeholder="#ff0000"
									/>
								</dd>

								<dt>Bar length</dt>
								<dd>
									<input
										type="text"
										value={String(barLength)}
										onChange={e => setBarLength(Number(e.currentTarget.value))}
										placeholder="28"
									/>
									<div className="smaller mt8">Recommended: {recommendedBarLength}</div>
								</dd>

								<dt>Max percent</dt>
								<dd>
									<input
										type="text"
										value={String(maxPercent)}
										onChange={e => setMaxPercent(Number(e.currentTarget.value))}
										placeholder="100"
									/>
								</dd>

								<dt>Bar style</dt>
								<dd>
									<select
										className="button"
										value={barPresetId}
										onChange={e => setBarPresetId(e.currentTarget.value)}
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
									<input type="text" value={fillChar} onChange={e => setFillChar(e.currentTarget.value)} />
								</dd>

								<dt>Empty char</dt>
								<dd>
									<input type="text" value={emptyChar} onChange={e => setEmptyChar(e.currentTarget.value)} />
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
										onChange={e => setPreviewPercent(Number(e.currentTarget.value))}
										placeholder="42"
                    min={0}
                    max={maxPercent}
									/>
                  <input
                    type="text"
                    value={String(previewPercent)}
                    onChange={e => setPreviewPercent(Number(e.currentTarget.value))}
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
		</div>
	);
}

export default App;
