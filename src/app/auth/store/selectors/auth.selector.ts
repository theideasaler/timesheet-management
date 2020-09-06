import { AppState } from '../index.state';

export const selectAuthFeature = (state: AppState) => state.auth;
export const selectAuthError = (state: AppState) => state.auth.error;
