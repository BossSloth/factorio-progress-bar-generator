import { WaitCondition } from './waitCondition';

export interface ScheduleRecord {
  records: Array<{
    station: string;
    wait_conditions?: WaitCondition[];
  }>;
}
