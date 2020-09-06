import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TimesheetContainerComponent } from './content/timesheet-container/timesheet-container.component';
import { TimesheetsRoutingModule } from './timesheets.routing.module';
import { TimesheetsViewComponent } from './_shared/timesheets-view/timesheets-view.component';
import { PropertypipePipe } from '@pipes/propertypipe.pipe';
import { CapitalcasePipe } from '@pipes/capitalcase.pipe';
import { EffectsModule } from '@ngrx/effects';
import { TimesheetEffects } from './store/effects/timesheets.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ActionsColumnComponent } from './_shared/actions-column/actions-column.component';
import { SimpleDialogComponent } from './_shared/simple-dialog/simple-dialog.component';
import { ExistInArrPipe } from '@pipes/exist-in-arr.pipe';
import { ArrIncludesPipe } from '../pipes/arr-includes.pipe';
import { EditingStatusEffects } from './store/effects/editing-status.effect';

@NgModule({
  declarations: [
    TimesheetContainerComponent,
    TimesheetsViewComponent,
    PropertypipePipe,
    CapitalcasePipe,
    ExistInArrPipe,
    ActionsColumnComponent,
    SimpleDialogComponent,
    ArrIncludesPipe,
  ],
  imports: [
    CommonModule,
    TimesheetsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    DragDropModule,
    MatFormFieldModule,
    StoreModule.forFeature('timesheetsRoot', reducers),
    EffectsModule.forFeature([TimesheetEffects, EditingStatusEffects]),
  ],
  exports: [PropertypipePipe, CapitalcasePipe],
})
export class TimesheetsModule {}
