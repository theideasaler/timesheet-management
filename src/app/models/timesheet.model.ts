import { dateToday } from '@utils/date.util';

export class TimeSheet {
  _id: string;
  state: string;
  date = dateToday();
  title: string;
  type: string;
  duration: string;
  hourlyRate = 250.5;
  total: number;
}
