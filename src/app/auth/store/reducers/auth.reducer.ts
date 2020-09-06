import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/index';
import { User } from '@models/user.model';

export interface AuthState {
  authenticated: boolean;
  user: User | null;
  error: string | null;
}

export const initialState: AuthState = {
  authenticated: false,
  user: null,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    authenticated: true,
    user,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function authReducer(state: AuthState, action: any) {
  return reducer(state, action);
}
