import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetContainerComponent } from './timesheet-container/timesheet-container.component';
import { TimesheetsRoutingModule } from './timesheets.routing.module';

@NgModule({
  declarations: [TimesheetContainerComponent],
  imports: [CommonModule, TimesheetsRoutingModule],
})
export class TimesheetsModule {}
