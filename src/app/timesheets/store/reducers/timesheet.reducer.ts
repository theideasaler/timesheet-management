import { createReducer, on } from '@ngrx/store';
import { TimeSheetsActions } from '../actions/index';
import { TimeSheet } from '@models/timesheet.model';

export const initialState: TimeSheet[] | null = null;

const reducer = createReducer(
  initialState,
  on(
    TimeSheetsActions.loadTimeSheetsSuccess,
    (state, { items }) => (state = [...items])
  ),
  on(TimeSheetsActions.loadTimeSheetsFailure, (state) => state),
  on(TimeSheetsActions.deleteSuccess, (state, { index }) => {
    const newState = [...state];
    newState.splice(index, 1);
    return newState;
  }),
  on(TimeSheetsActions.addOneSuccess, (state, { data }) => {
    let newState = [...state];
    newState.unshift(data);
    return newState;
  }),
  on(TimeSheetsActions.submitRowsSuccess, (state, { dataMap, includesNew }) => {
    let newState = [...state];
    if (includesNew) {
      newState.unshift(new TimeSheet());
    }

    for (const [keyIndex, item] of dataMap.entries()) {
      newState[keyIndex] = { ...item };
    }

    return newState;
  })
);

export function timeSheetsReducer(state: TimeSheet[] | null, action: any) {
  return reducer(state, action);
}
