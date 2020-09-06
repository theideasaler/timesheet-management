import { TimeSheet } from '@models/timesheet.model';

export interface TimeSheetModuleState {
    timesheets: TimeSheet[];
    defaultRate: number;
    visibleFields: string[];
    readOnlyFields: string[];
    editingStatus: number[];
}