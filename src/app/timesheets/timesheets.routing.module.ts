import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetContainerComponent } from './content/timesheet-container/timesheet-container.component';

const routes: Routes = [{ path: '', component: TimesheetContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesheetsRoutingModule {}
