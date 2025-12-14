import { Comparator } from './circuitCondition';
import { Quality } from './quality';

export type ItemFilter = {
	/** 1-based */
	index: number;
	name: string;
	quality?: Quality;
	comparator?: Comparator;
};
