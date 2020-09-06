import { createAction, props } from '@ngrx/store';
import { TimeSheet } from '@models/timesheet.model';

export const editRow = createAction(
  '[ActionsColumn Component] EditRow',
  props<{ index: number, fromNew?: boolean }>()
);

export const cancelEdit = createAction(
    '[ActionsColumn Component] CancelEdit',
    props<{ index: number | number[], _id?: string }>()
  );

export const saveRow = createAction(
  '[ActionsColumn Component] SaveRow',
  props<{ index: number, data: TimeSheet }>()
);
