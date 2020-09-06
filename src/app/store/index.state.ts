import { ActionReducerMap } from '@ngrx/store';

import { AuthState, authReducer } from './reducers/auth.reducer';


export interface AppState {
  auth: AuthState;
}

export const rootReducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const selectAuthFeature = (state: AppState) => state.auth;
export const selectAuthError = (state: AppState) => state.auth.error;
