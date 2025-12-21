import { type ChangeEvent, JSX } from 'react';

interface PreviewPanelProps {
  onPreviewPercentChange(value: number): void;
  readonly maxPercent: number;
  readonly previewPercent: number;
  readonly previewText: string;
}

function handleInputChange(handler: (value: string) => void): (e: ChangeEvent<HTMLInputElement>) => void {
  return (e: ChangeEvent<HTMLInputElement>) => {
    handler(e.currentTarget.value);
  };
}

export function PreviewPanel({
  previewPercent,
  previewText,
  maxPercent,
  onPreviewPercentChange,
}: PreviewPanelProps): JSX.Element {
  return (
    <div className="panel">
      <h3>Preview</h3>
      <dl className="panel-hole">
        <dt>Preview percent</dt>
        <dd>
          <input
            type="range"
            name="preview-percent-range"
            value={String(previewPercent)}
            onChange={handleInputChange((value) => { onPreviewPercentChange(Number(value)); })}
            placeholder="42"
            min={0}
            max={maxPercent}
          />
          <input
            type="text"
            name="preview-percent-text"
            value={String(previewPercent)}
            onChange={handleInputChange((value) => { onPreviewPercentChange(Number(value)); })}
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
  );
}
