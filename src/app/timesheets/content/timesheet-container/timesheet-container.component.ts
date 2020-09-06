import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TimeSheetsActions } from '../../store/actions';
import {
  selectTimesheetsItems,
  selectDefaultRate,
  selectVisibleFields,
  selectReadOnlyFields,
  selectEditingRows,
} from '../../store/index.selector';
import { TimeSheet } from '@models/timesheet.model';
import { TimeSheetModuleState } from '../../store/index.state';

@Component({
  selector: 'app-timesheet-container',
  templateUrl: './timesheet-container.component.html',
  styleUrls: ['./timesheet-container.component.scss'],
})
export class TimesheetContainerComponent implements OnInit {
  public timesheets$: Observable<TimeSheet[]> = this.store.pipe(
    select(selectTimesheetsItems)
  );
  public defaulthourlyRate$: Observable<number> = this.store.pipe(
    select(selectDefaultRate)
  );
  public visibleFields$: Observable<string[]> = this.store.pipe(
    select(selectVisibleFields)
  );
  public readOnlyFields$: Observable<string[]> = this.store.pipe(
    select(selectReadOnlyFields)
  );
  public editingRows$: Observable<number[]> = this.store.pipe(
    select(selectEditingRows)
  );

  constructor(private store: Store<{ timesheetsRoot: TimeSheetModuleState }>) {}

  ngOnInit(): void {
    this.store.dispatch(TimeSheetsActions.loadTimeSheets());
  }
}
