import { createAction, props } from '@ngrx/store';

export const updateDefaultRate = createAction(
  '[TimesheetsView Component] Update defaultHourlyRate',
  props<{ newRate: number}>()
);