import { createSelector } from '@ngrx/store';
import { TimesheetState } from '../reducers/timesheet.reducer';

export const selectTimesheetsFeature = (state: any) => state.timesheets;
export const selectTimesheetsItems = createSelector(
  selectTimesheetsFeature,
  (feature: TimesheetState) => feature.items
);
