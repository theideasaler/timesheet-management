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

export const addOne = createAction(
  '[TimesheetsView Component] AddOne',
  props<{ data: TimeSheet }>()
);

export const addOneSuccess = createAction(
  '[Timesheet API] AddOne Success',
  props<{ data: TimeSheet }>()
);

export const addOneFailed = createAction('[Timesheet API] AddOne Failed');

export const deleteOne = createAction(
  '[ActionsColumn Component] DeleteOne',
  props<{ index: number; _id: string }>()
);

export const deleteSuccess = createAction(
  '[Timesheet API] DeleteSuccess',
  props<{ index: number; _id: string }>()
);

export const deleteFailure = createAction('[Timesheet API] DeleteFailure');

export const saveSuccess = createAction(
  '[Timesheet API] SaveSuccess',
  props<{ index: number; data: TimeSheet }>()
);

export const saveFailed = createAction('[Timesheet API] SaveFailed');

export const submitRows = createAction(
  '[Timesheet API] Submit',
  props<{ dataMap: Map<number, TimeSheet>; includesNew?: boolean }>()
);

export const submitRowsSuccess = createAction(
  '[Timesheet API] Submit Success',
  props<{ dataMap: Map<number, TimeSheet>; includesNew?: boolean }>()
);

export const submitRowsFailed = createAction(
  '[Timesheet API] Submit Failed'
);
