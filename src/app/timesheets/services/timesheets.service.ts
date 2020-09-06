import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TimeSheet } from '@models/timesheet.model';
import { delay } from 'rxjs/operators';

const timesheets: TimeSheet[] = [
  {
    _id: 'fd3SNIfdGerPs',
    state: 'Active',
    date: '9/4/2019',
    title: 'Task 1',
    type: 'Telephone Call',
    duration: '2:10',
    hourlyRate: 250.5,
    total: 252.75,
  },
  {
    _id: 'SNfd3IfderPsG',
    state: 'Submitted',
    date: '8/3/2020',
    title: 'Task 3',
    type: 'Research',
    duration: '2:10',
    hourlyRate: 250.5,
    total: 252.75,
  },
  {
    _id: 'SerPIfdsGNfd3',
    state: 'Active',
    date: '9/4/2019',
    title: 'hello world',
    type: 'Drafting Document',
    duration: '2:10',
    hourlyRate: 250.5,
    total: 252.75,
  },
  {
    _id: 'SefdrPIsG3Nfd',
    state: 'Active',
    date: '9/4/2019',
    title: 'Task 1',
    type: 'Telephone Call',
    duration: '3:05',
    hourlyRate: 120,
    total: 390,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TimesheetsService {
  public load() {
    // http://endpoint-url/get/timesheets
    const items: TimeSheet[] = timesheets;
    return of(items).pipe(delay(350));
  }

  public deleteOne({ index, _id }: { index: number; _id: string }) {
    // http://endpoint-url/delete/timesheets/_id
    const res = { index, _id };
    return of(res).pipe(delay(250));
  }

  public saveOne({ index, data }: { index: number; data: TimeSheet }) {
    // http://endpoint-url/save/timesheets/_id
    const res = { index, data };
    return of(res).pipe(delay(250));
  }

  public addOne({ data }) {
    // http://endpoint-url/create/timesheets/{data}
    const newData = { ...data };
    newData[`state`] = 'Active';
    newData[`_id`] = `Random_ID-${+new Date()}`;
    const res = { data: newData };
    return of(res).pipe(delay(250));
  }

  public submitOnes({
    dataMap,
    includesNew,
  }: {
    dataMap: Map<number, TimeSheet>;
    includesNew?: boolean;
  }) {
    // http://endpoint-url/create/timesheets/{data}
    const newDataMap = new Map<number, TimeSheet>();
    const indexes:number[] = [];
    for (const [keyIndex, item] of dataMap.entries()) {
      const newItem = {...item};
      if (keyIndex === 0 && includesNew) {
        newItem[`state`] = 'Submitted';
        newItem[`_id`] = `Random_ID-${+new Date()}`;
      } else {
        newItem[`state`] = 'Submitted';
      }
      newDataMap.set(keyIndex, newItem);
      indexes.push(keyIndex);
    }
    const res = { dataMap: newDataMap, includesNew, indexes};
    return of(res).pipe(delay(250));
  }
}
