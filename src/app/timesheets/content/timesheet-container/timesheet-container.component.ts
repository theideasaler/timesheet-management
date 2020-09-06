import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TimeSheetsActions } from '../../store/actions';
import { TimesheetState } from '../../store/reducers/timesheet.reducer';
import { selectTimesheetsFeature } from '../../store/selectors/timesheets.selector';

@Component({
  selector: 'app-timesheet-container',
  templateUrl: './timesheet-container.component.html',
  styleUrls: ['./timesheet-container.component.scss'],
})
export class TimesheetContainerComponent implements OnInit {
  public timesheets$: Observable<TimesheetState> = this.store.pipe(
    select(selectTimesheetsFeature)
  );

  constructor(private store: Store<{ timesheets: TimesheetState }>) {}

  ngOnInit(): void {
    this.timesheets$.subscribe((item) => console.log('items:', item));
    this.store.dispatch(TimeSheetsActions.loadTimeSheets());
  }
}
