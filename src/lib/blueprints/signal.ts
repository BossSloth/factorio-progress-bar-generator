import { Quality } from './quality';

export interface Signal {
  type?: string;
  name: string;
  quality?: Quality;
}
