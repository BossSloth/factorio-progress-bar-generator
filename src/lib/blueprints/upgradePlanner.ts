import { Comparator } from './circuitCondition';
import { Icon } from './icon';
import { Quality } from './quality';

export interface UpgradePlanner {
  upgrade_planner: {
    settings: null | {
      mappers: Array<{
        from?: {
          type: 'entity' | 'item';
          name: string;
          quality?: Quality;
          comparator?: Comparator;
          module_filter?: {
            name: string;
            quality?: Quality;
            comparator?: Comparator;
          };
        };
        to?: {
          type: 'entity' | 'item';
          name: string;
          quality?: Quality;
          module_limit: number;
          module_slots: Array<{
            name: string;
            quality?: Quality;
          }>;
        };
        /** 0-based */
        index: number;
      }>;
      icons?: Icon[];
      description?: string;
    };
    item: 'upgrade-planner';
    description?: string;
    label?: string;
    version: number;
  };
}
