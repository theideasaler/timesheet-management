import { createReducer, on } from '@ngrx/store';
import { EditingActions } from '../actions/index';

export const editingRows: number[] = [];

const reducer = createReducer(
  editingRows,
  on(EditingActions.editRow, (state, { index, fromNew }) => {
    let newState = [...state];
    if (fromNew) {
      newState = newState.map((ele) => ++ele);
    }
    newState.push(index);
    return newState;
  }),
  on(EditingActions.cancelEdit, (state, { index }) => {
    let newState = [...state];
    if (typeof index === 'object') {
        newState = newState.filter((ele) => !index.includes(ele));
    } else {
      newState = newState.filter((ele) => ele !== index);
    }
    return newState;
  })
);

export function editingReducer(state: number[], action: any) {
  return reducer(state, action);
}
