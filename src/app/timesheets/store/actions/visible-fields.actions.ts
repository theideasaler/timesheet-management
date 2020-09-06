import { createAction, props } from '@ngrx/store';

export const updateVisibleFields = createAction(
  '[TimesheetsView Component] Update visibleFields',
  props<{ visibleFields: string[]}>()
);