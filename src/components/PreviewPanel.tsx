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

  useEffect(() => {
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
  }, [maxPercent]);

  const bar = makeBar(previewPercent, maxPercent, barLength, fillScale, emptyChar);

  return (
    <div className="panel">
      <h3>Preview</h3>
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
    </div>
  );
}
