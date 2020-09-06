import { createReducer, on } from '@ngrx/store';
import { TimeSheetsActions } from '../actions/index';
import { TimeSheet } from '@models/timesheet.model';

export interface TimesheetState {
  items: TimeSheet[] | null;
  defaulthourlyRate: number;
  visibleFields: string[];
}

export const initialState: TimesheetState = {
  items: null,
  defaulthourlyRate: 250.5,
  visibleFields: [
    'state',
    'date',
    'title',
    'type',
    'duration',
    'hourlyRate',
    'total',
  ],
};

const reducer = createReducer(
  initialState,
  on(TimeSheetsActions.loadTimeSheetsSuccess, (state, { items }) => ({
    ...state,
    items,
  })),
  on(TimeSheetsActions.loadTimeSheetsFailure, (state) => state)
);

export function timeSheetsReducer(state: TimesheetState, action: any) {
  return reducer(state, action);
}
