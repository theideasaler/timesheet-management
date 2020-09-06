import { createReducer, on } from '@ngrx/store';
import { DefaultRateActions } from '../actions/index';

export const initialState = 250.5;

const reducer = createReducer(
  initialState,
  on(
    DefaultRateActions.updateDefaultRate,
    (state, { newRate }) => (state = newRate)
  )
);

export function defaultRateReducer(state: number, action: any) {
  return reducer(state, action);
}
