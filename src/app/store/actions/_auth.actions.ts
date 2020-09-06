import { createAction, props } from '@ngrx/store';
import { User } from '@models/user.model';

export const loginSuccess = createAction(
  '[Auth API] Succeed',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth API] Failed',
  props<{ error: any }>()
);
