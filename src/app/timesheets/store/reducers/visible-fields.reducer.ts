import { createReducer, on } from '@ngrx/store';
import { VisibleFieldsActions } from '../actions/index';

export const initialState: string[] = [
  'state',
  'date',
  'title',
  'type',
  'duration',
  'hourlyRate',
  'total',
];

const reducer = createReducer(
  initialState,
  on(
    VisibleFieldsActions.updateVisibleFields,
    (state, { visibleFields }) => (state = [...visibleFields])
  )
);

export function visibleFieldsReducer(state: string[], action: any) {
  return reducer(state, action);
}
