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
    const items: TimeSheet[] = timesheets;
    return of(items).pipe(delay(350));
  }
}
