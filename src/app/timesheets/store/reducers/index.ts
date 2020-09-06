import * as fromTimesheets from './timesheet.reducer';
import * as fromDefaultRate from './default-rate.reducer';
import * as fromVisibleFields from './visible-fields.reducer';
import * as fromReadOnlyFields from './readonly-fields.reducer';

export const reducers = {
    timesheets: fromTimesheets.timeSheetsReducer,
    defaultRate: fromDefaultRate.defaultRateReducer,
    visibleFields: fromVisibleFields.visibleFieldsReducer,
    readOnlyFields: fromReadOnlyFields.readOnlyFieldsReducer,
}