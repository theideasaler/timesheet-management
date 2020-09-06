import { dateToday } from '@utils/date.util';

export interface ITimeSheet {
  _id: string;
  state: string;
  date: string;
  title: string;
  type: string;
  duration: string;
  hourlyRate: number;
  total: number;
}

export class TimeSheet implements ITimeSheet{
  _id: string;
  state: string;
  date = dateToday();
  title: string;
  type: string;
  duration: string;
  hourlyRate = 250.5;
  total: number;
}
