import { useCallback, useEffect, useRef, useState, type JSX, type ReactElement } from 'react';

export interface DragProps {
  onDragStart(e: React.MouseEvent<HTMLDivElement>): void;
  isDragging: boolean;
}

interface DraggablePopupProps {
  children(dragProps: DragProps): ReactElement;
  readonly isOpen: boolean;
}

export function DraggablePopup({ children, isOpen }: DraggablePopupProps): JSX.Element | null {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number; } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen || position !== null) return;
    requestAnimationFrame(() => {
      if (!popupRef.current) return;
      const rect = popupRef.current.getBoundingClientRect();
      setPosition({
        x: (window.innerWidth - rect.width) / 2,
        y: (window.innerHeight - rect.height) / 2,
      });
    });
  }, [isOpen, position]);

  useEffect(() => {
    if (!isOpen) {
      setPosition(null);
    }
  }, [isOpen]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!popupRef.current) return;
    const rect = popupRef.current.getBoundingClientRect();
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return undefined;

    function handleMouseMove(e: MouseEvent): void {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }

    function handleMouseUp(): void {
      setIsDragging(false);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return (): void => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      style={{
        position: 'fixed',
        left: position?.x ?? 0,
        top: position?.y ?? 0,
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        visibility: position === null ? 'hidden' : 'visible',
      }}
    >
      {children({ isDragging, onDragStart: handleMouseDown })}
    </div>
  );
}
