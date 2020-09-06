import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TimesheetContainerComponent } from './content/timesheet-container/timesheet-container.component';
import { TimesheetsRoutingModule } from './timesheets.routing.module';
import { TimesheetsViewComponent } from './_shared/timesheets-view/timesheets-view.component';
import { PropertypipePipe } from '@pipes/propertypipe.pipe';
import { CapitalcasePipe } from '@pipes/capitalcase.pipe';
import { EffectsModule } from '@ngrx/effects';
import { TimesheetEffects } from './store/effects/timesheets.effect';
import { StoreModule } from '@ngrx/store';
import { fromTimesheets } from './store/reducers';

@NgModule({
  declarations: [
    TimesheetContainerComponent,
    TimesheetsViewComponent,
    PropertypipePipe,
    CapitalcasePipe,
  ],
  imports: [
    CommonModule,
    TimesheetsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    StoreModule.forFeature('timesheets', fromTimesheets.timeSheetsReducer),
    EffectsModule.forFeature([TimesheetEffects]),
  ],
  exports: [PropertypipePipe, CapitalcasePipe],
})
export class TimesheetsModule {}
