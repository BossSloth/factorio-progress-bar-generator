import { Comparator } from './circuitCondition';
import { Quality } from './quality';

export interface ItemFilter {
  /** 1-based */
  index: number;
  name: string;
  quality?: Quality;
  comparator?: Comparator;
}
