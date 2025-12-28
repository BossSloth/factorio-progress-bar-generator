import type { Item } from '@/lib/generated/inventory-data';
import { JSX, useEffect, useState } from 'react';
import { makeBar } from '../App';
import { ItemRenderer } from './ItemRenderer';
import './preview-panel.css';

interface PreviewPanelProps {
  readonly barColor: string;
  readonly barLength: number;
  readonly emptyChar: string;
  readonly fillScale: string[];
  readonly item: Item;
  readonly maxPercent: number;
}

export function PreviewPanel({
  barColor,
  barLength,
  emptyChar,
  fillScale,
  item,
  maxPercent,
}: PreviewPanelProps): JSX.Element {
  const [previewPercent, setPreviewPercent] = useState(40);
  const [autoIncrement, setAutoIncrement] = useState(true);

  useEffect(() => {
    if (!autoIncrement) return undefined;

    const interval = setInterval(() => {
      setPreviewPercent((prev) => {
        const next = prev + 1;
        if (next > maxPercent) return 0;
        if (next === 50) return 51;

        return next;
      });
    }, 50);

    return (): void => {
      clearInterval(interval);
    };
  }, [maxPercent, autoIncrement]);

  const bar = makeBar(previewPercent, maxPercent, barLength, fillScale, emptyChar);

  return (
    <div className="panel h100">
      <h3 title="Preview is not 100% accurate some characters like ░ look different in-game. The bar also stays the same width in-game.">Preview*</h3>
      <div className="panel-hole preview-panel">
        <div className="preview-panel-content">
          <div className="preview-bar-container">
            <div className="preview-bar-item">
              <ItemRenderer item={item} />
            </div>
            <div className="preview-bar-text" style={{ color: barColor }}>
              {bar}
            </div>
            <div className="preview-bar-percent">{previewPercent}%</div>
          </div>
          <div className="preview-display-item">
            <ItemRenderer item={item} />
          </div>
        </div>
      </div>

      <dl className="panel-hole preview-controls">
        <dd style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '52px' }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={autoIncrement}
              onChange={(e): void => { setAutoIncrement(e.target.checked); }}
            />
            <div className="checkbox" />
            <div>Auto Increment</div>
          </label>
          {!autoIncrement && (
            <div className="preview-slider-container">
              <input
                type="range"
                className="preview-slider"
                min="0"
                max={maxPercent}
                value={previewPercent}
                onChange={(e): void => { setPreviewPercent(Number(e.target.value)); }}
                // @ts-expect-error stupid css variables
                style={{ '--value': `${previewPercent}`, '--max': `${maxPercent}`, '--min': '0' }}
              />
              <input
                type="text"
                className="preview-slider-value"
                value={`${previewPercent}%`}
                onChange={(e): void => {
                  const value = e.target.value.replace('%', '');
                  const numValue = Number(value);
                  if (!isNaN(numValue)) {
                    setPreviewPercent(Math.max(0, Math.min(maxPercent, numValue)));
                  }
                }}
              />
            </div>
          )}
        </dd>
      </dl>
    </div>
  );
}
