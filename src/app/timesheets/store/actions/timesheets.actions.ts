import { createAction, props } from '@ngrx/store';
import { TimeSheet } from '@models/timesheet.model';

export const loadTimeSheets = createAction(
  '[TimesheetContainer Component] Loading'
);

export const loadTimeSheetsSuccess = createAction(
  '[Timesheet API] LoadSucceed',
  props<{ items: TimeSheet[] }>()
);

export const loadTimeSheetsFailure = createAction(
  '[Timesheet API] LoadFailure'
);
