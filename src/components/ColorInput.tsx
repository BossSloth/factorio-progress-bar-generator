import type { JSX } from 'react';

interface ColorInputProps {
  onChange(value: string): void;
  readonly value: string;
}

export function ColorInput({ onChange, value }: ColorInputProps): JSX.Element {
  return (
    <div className="flex flex-items-center color-input" style={{ gap: 8 }}>
      <input
        type="color"
        value={value.startsWith('#') ? value : `#${value}`}
        onChange={(e) => { onChange(e.currentTarget.value); }}
        style={{
          width: 36,
          minWidth: 36,
          height: 36,
          padding: 0,
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => { onChange(e.currentTarget.value); }}
        placeholder="#ff0000"
        style={{ width: '100%' }}
      />
    </div>
  );
}
