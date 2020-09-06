import { createReducer, on } from '@ngrx/store';
import { TimeSheetsActions } from '../actions/index';
import { TimeSheet } from '@models/timesheet.model';

export const initialState: TimeSheet[] | null = null;

const reducer = createReducer(
  initialState,
  on(TimeSheetsActions.loadTimeSheetsSuccess, (state, { items }) => state = [...items]),
  on(TimeSheetsActions.loadTimeSheetsFailure, (state) => state)
);

export function timeSheetsReducer(state: TimeSheet[] | null, action: any) {
  return reducer(state, action);
}
