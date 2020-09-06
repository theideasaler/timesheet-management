import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TimeSheet } from '@models/timesheet.model';

export interface TimeSheetModuleState {
    timesheets: TimeSheet[];
    defaultRate: number;
    visibleFields: string[];
    readOnlyFields: string[];
}

// export interface CustomerState extends EntityState<Customer> {
//   error: boolean;
//   loading: boolean;
//   total: number;
// }

// export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
//   selectId: (customer: Customer) => customer.id
// });

// export const initialCustomerState: CustomerState = customerAdapter.getInitialState({
//   error: false,
//   loading: true,
//   total: 0
// });
