import { createReducer, on } from '@ngrx/store';
import { ReadOnlyFieldsActions } from '../actions/index';

export const initialState: string[] = ['state', 'total'];

const reducer = createReducer(
  initialState,
  on(ReadOnlyFieldsActions.updateReadOnlyFields, (state, { readonlyFields }) => state = [...readonlyFields]),
);

export function readOnlyFieldsReducer(state: string[], action: any) {
  return reducer(state, action);
}
