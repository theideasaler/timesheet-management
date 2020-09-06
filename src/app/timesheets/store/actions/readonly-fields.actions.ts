import { createAction, props } from '@ngrx/store';

export const updateReadOnlyFields = createAction(
  '[TimesheetsView Component] Update readonlyFields',
  props<{ readonlyFields: string[]}>()
);