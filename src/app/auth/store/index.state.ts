import { ActionReducerMap } from '@ngrx/store';

import { AuthState, authReducer } from './reducers/auth.reducer';


export interface AppState {
  auth: AuthState;
}

export const rootReducers: ActionReducerMap<AppState> = {
  auth: authReducer
};
