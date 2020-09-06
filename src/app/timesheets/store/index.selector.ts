import { createSelector } from '@ngrx/store';
import { TimeSheetModuleState } from './index.state';

export const selectTimesheetsFeature = (state: any) => state.timesheetsRoot;
export const selectTimesheetsItems = createSelector(
  selectTimesheetsFeature,
  (feature: TimeSheetModuleState) => feature.timesheets
);
export const selectDefaultRate = createSelector(
  selectTimesheetsFeature,
  (feature: TimeSheetModuleState) => feature.defaultRate
);
export const selectVisibleFields = createSelector(
  selectTimesheetsFeature,
  (feature: TimeSheetModuleState) => feature.visibleFields
);

export const selectReadOnlyFields = createSelector(
  selectTimesheetsFeature,
  (feature: TimeSheetModuleState) => feature.readOnlyFields
);