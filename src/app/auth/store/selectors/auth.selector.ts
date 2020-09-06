import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthFeature = (state: any) => state.auth;
export const selectAuthError = createSelector(
  selectAuthFeature,
  (auth: AuthState) => auth.error
);
