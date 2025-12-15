import { ScheduleRecord } from './scheduleRecord';

export interface Schedule {
  locomotives: number[];
  schedule: ScheduleRecord;
}
