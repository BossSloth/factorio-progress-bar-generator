import type { JSX } from 'react';

interface ColorInputProps {
  onChange(value: string): void;
  readonly ariaLabelledBy?: string;
  readonly value: string;
}

export function ColorInput({ onChange, value, ariaLabelledBy }: ColorInputProps): JSX.Element {
  return (
    <div className="flex flex-items-center color-input" style={{ gap: 8 }}>
      <input
        type="color"
        value={value.startsWith('#') ? value : `#${value}`}
        onChange={(e) => { onChange(e.currentTarget.value.toUpperCase()); }}
        aria-labelledby={ariaLabelledBy}
        style={{
          width: 36,
          minWidth: 36,
          height: 36,
          padding: 0,
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
        name="bar-color"
      />
      <input
        type="text"
        value={value.toUpperCase()}
        onChange={(e) => { onChange(e.currentTarget.value.toUpperCase()); }}
        placeholder="#FF0000"
        style={{ width: '100%' }}
        aria-labelledby={ariaLabelledBy}
        name="bar-text-color"
      />
    </div>
  );
}
