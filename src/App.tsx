import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { addEntity, createEmptyBlueprint, decodePlan, encodePlan, type Color, type Icon } from './lib/blueprints';

type LampInput = {
	colorHex: string;
};

const clampLampCount = (n: number): number => {
	if (!Number.isFinite(n)) return 1;
	return Math.min(200, Math.max(1, Math.floor(n)));
};

const normalizeHex = (value: string): string => {
	const v = value.trim();
	if (v.length === 0) return '#ffffff';
	if (v.startsWith('#')) return v;
	return `#${v}`;
};

const hexToColor = (hexInput: string): Color => {
	const hex = normalizeHex(hexInput).replace('#', '');
	const full =
		hex.length === 3
			? hex
				.split('')
				.map(ch => ch + ch)
				.join('')
			: hex.padEnd(6, '0').slice(0, 6);

	const r = Number.parseInt(full.slice(0, 2), 16) / 255;
	const g = Number.parseInt(full.slice(2, 4), 16) / 255;
	const b = Number.parseInt(full.slice(4, 6), 16) / 255;
	return { r, g, b, a: 1 };
};

export function App() {
	const [lampCount, setLampCount] = useState<number>(10);
	const [lamps, setLamps] = useState<LampInput[]>(() =>
		Array.from({ length: 10 }, () => ({ colorHex: '#ffffff' }))
	);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const nextCount = clampLampCount(lampCount);
		setLampCount(nextCount);
		setLamps(prev => {
			if (prev.length === nextCount) return prev;
			if (prev.length < nextCount) {
				return prev.concat(
					Array.from({ length: nextCount - prev.length }, () => ({ colorHex: '#ffffff' }))
				);
			}
			return prev.slice(0, nextCount);
		});
	}, [lampCount]);

  console.log(decodePlan('0eNrd3c9uo0YAx/F3oerN3mVgBmYs5UksKyIO2aBicDHJrhVF6pH/VS8999C+2D5JwWl3lcWJDf4hzUxkRcLm7+cw+hpheDJuwgd/mwRRaiyejGAdRztjsXwydsGnyAu79yJv4xsL4zbYbUNvP996kR8azzMjiG79L8aCPK9mhh+lQRr4L4seJvbX0cPmxk/aGWbHVzEztvGuXSqOuq20a7KI84HNjL2xmFObfWDtNm6DxF+/zMJnRrtzaRKH1zf+vfcYxEm33NZL2pWnfvKy7XaW22/rvAuSXXrdO5Jvi8zN7ji6Q0697vjNbmLTfZx2Kze+5n8fDnT9srrji6f+l3ZRY3nX7txV6q/voziMP+3nuzBO56H/6Ifz7qPVct2+n1z9dHdntn+rZZD6myvvIY03Xre/89068KO13+Ksf1l9/fMP5Ouv35YfD5tfLT8edsb8ud31C7WIRFrNpFoEoGVJpFVNqmUBtGyJtIpJtWyAFpVIK5tUiwK0mFxazXRaDKDlyKVVTaflALRcubSK6bRcgBaXSyubTosDtIR0Ws1EWgJRp6Z0XOVUeQqpeSKdVz6VF6LniSWdV/v6fRIvRNETW0avehIvRNMTKqNXOYkXouoJk9Ern8QL0fXEkdELMYT1vRBlT1xJvWq8F6LtCZfUq8R7IeqeCEm9crwXou8tU1Kvi78X9U+oIvreIvJ6VWAvyPl6S16vAuyF6HvLltcrA3sh+t6iUns1SC9E31tMaq8K6YXoe8uR2qtAeiH63nKl9sqQXoi+t7jsXg3MC9H3lpDdq4J5IfreNmX3ymGXACD63iaye409t9P3QvS9bSngVWO8IFfk2Ap4lRgvRN/bVAGvHOOF6HubKeA1agjreyH63nbU8KoBXoi+t101vEqAF6Lvba6GVw7wQvS9LdTwGj6E9b0QfU9NZbyqSy9aRfQ9Jcp4FZd6IfqeWsp4ZZd6Ifqe2ip5NRd5Qa65pyp5VRd5IfqeMpW8iou8EH1PHZW8sou8EH1PXcW8mvFeiL6nXDGvarwXou+pUMyrGO+F6HtGFPM6+4tR/2dWiF5llnpe9UgvRK8yWz2vcqQXolcZVc8rH+kF+ZUoU8/rvCGs74XoVeYo6VWP8UL0KnOV9CrHeCF6lXElvfIxXoheZUJJrzOGsL4XolcdU1WvevAP3RHnox2iqlcx2AvR946lqlc22AvR946tsFczzAvR9w5V2Ksa5oXoe4cp7FUM84LcB8ZR2Csb5oXoe8dV26sZ4IXoe4er7VUN8EL0vSPU9ioGeCH63jXV9soG3JoJ0fcuUd6rPtcL0feupbxXea4Xou9dW3mv/FwvRN+7VHmvN87t9L0Qfe8yHbzqs7wQfe86OniVZ3lB7vTo6uCVn+WF6HuX6+B1bAjreyH63hWaeNWnvRB9z01NvMrTNxNF9D0nmnhlp70Qfc8tfbyaE16Ivue2Pl7VCS9E33Oqj1dxwgvR95zp45Wd8EL0PXe08mre80L0PXe18qre84Lcy51r5VW854Xoey608sre80L0vTB182revP09ou8F0c2rfNML0ffC0s0rf9ML0ffC1s3r/3M7fS9E3wuqoVd93AvR94Jp6FUe90L0vXA09MqPeyH6Xrgaeh2GsL4Xou8F19OrPuIFeVqT0NOrPOKFeV5TP/D/0QEs6z2tqcv7VbvvXvjZ2++ud/fxZ2ORJg9+9yTdH55nm+633VEHt8as+/f6+GfGrw9eGKT7+Sv6/95sZ47iZON1T9p9BXtlPHdb6gjaqe/P/50Zj+1mDythjiWoEIwTWwiTPj//C9xot/A='

  ))

	const blueprintString = useMemo(() => {
		const blueprint = createEmptyBlueprint();
		blueprint.blueprint.label = 'Lamp colors';

		const icons: Icon[] = [
			{
				signal: { type: 'item', name: 'small-lamp' },
				index: 1,
			},
		];
		blueprint.blueprint.icons = icons;

		const cols = Math.max(1, Math.ceil(Math.sqrt(lamps.length)));
		for (let i = 0; i < lamps.length; i++) {
			const row = Math.floor(i / cols);
			const col = i % cols;
			addEntity(blueprint, {
				name: 'small-lamp',
				position: { x: col * 2, y: row * 2 },
				always_on: true,
				color: hexToColor(lamps[i]?.colorHex ?? '#ffffff'),
			});
		}

		return encodePlan(blueprint);
	}, [lamps]);

	const setLampColor = (index: number, colorHex: string) => {
		setLamps(prev => {
			if (index < 0 || index >= prev.length) return prev;
			const next = prev.slice();
			next[index] = { ...next[index], colorHex: normalizeHex(colorHex) };
			return next;
		});
	};

	const copy = async () => {
		await navigator.clipboard.writeText(blueprintString);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1200);
	};

	return (
		<div className="container">
			<div className="container-inner">
				<div className="panel">
					<h2>Lamp Blueprint Generator (test)</h2>
					<p>Set lamp count + colors and copy the generated blueprint string.</p>
				</div>

				<div className="panels2">
					<div>
						<div className="panel">
							<h3>Settings</h3>
							<dl className="panel-hole">
								<dt>Lamp count</dt>
								<dd>
									<input
										type="text"
										value={String(lampCount)}
										onChange={e => setLampCount(Number(e.currentTarget.value))}
										placeholder="10"
									/>
								</dd>
							</dl>
							<div className="mt8">
								<button type="button" className="button" onClick={() => setLamps(prev => prev.map(() => ({ colorHex: '#ffffff' })))}>
									Reset colors
								</button>
							</div>
						</div>

						<div className="panel">
							<h3>Lamps</h3>
							<div className="panel-hole">
								<div className="panel-hole-inner">
									<div className="columns-3">
										{lamps.map((lamp, i) => (
											<div key={i} className="mb8">
												<div className="strong mb8">Lamp {i + 1}</div>
												<input
													type="text"
													value={lamp.colorHex}
													onChange={e => setLampColor(i, e.currentTarget.value)}
													placeholder="#ff0000"
												/>
												<div className="mt8">
													<div
														className="panel-inset p4"
														style={{ width: '100%', height: 24, backgroundColor: normalizeHex(lamp.colorHex) }}
													/>
												</div>
											</div>
										))}
									</div>
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
