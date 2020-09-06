import { createAction, props } from '@ngrx/store';
import { Credentials } from '@models/credentials.model';

export const login = createAction(
  '[Login Component] Login',
  props<{ credentials: Credentials }>()
);
