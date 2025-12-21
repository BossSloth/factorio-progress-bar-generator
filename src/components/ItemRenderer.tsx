import { Item } from '@/lib/generated/inventory-data';
import { JSX } from 'react';

export function ItemRenderer({ item }: { readonly item: Item; }): JSX.Element {
  return (
    <div className={`quality ${item.quality}`} title={item.title}>
      <img className="inventory-image" src={item.imgSrc} alt={item.title} />
    </div>
  );
}
