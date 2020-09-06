import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { TimeSheet } from '@models/timesheet.model';
import { Store } from '@ngrx/store';
import { TimeSheetModuleState } from '../../store/index.state';
import {
  editRow,
  cancelEdit,
} from '../../store/actions/editing-status.actions';
import { addOne, submitRows } from '../../store/actions/timesheets.actions';

@Component({
  selector: 'app-timesheets-view',
  templateUrl: './timesheets-view.component.html',
  styleUrls: ['./timesheets-view.component.scss'],
})
export class TimesheetsViewComponent implements OnInit, OnChanges {
  @Input() timesheets: TimeSheet[];
  @Input() defaulthourlyRate: number;
  @Input() visibleFields: string[];
  @Input() readOnlyFields: string[];
  @Input() editingRows: number[];
  private hasNewRow = false;
  constructor(private store: Store<{ timesheetsRoot: TimeSheetModuleState }>) {}
  ngOnChanges(changes: SimpleChanges) {
    [
      'timesheets',
      'defaulthourlyRate',
      'visibleFields',
      'readOnlyFields',
      'editingRows',
    ].forEach((key) => {
      if (changes[key] && changes[key].currentValue) {
        this[key] = _.cloneDeep(changes[key].currentValue);
      }
    });
  }

  ngOnInit() {}

  public trackByFn(index: number) {
    return index;
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.visibleFields,
      event.previousIndex,
      event.currentIndex
    );
  }

  public createTimesheet() {
    if (!this.hasNewRow) {
      this.hasNewRow = true;
      this.timesheets.unshift(new TimeSheet());
      this.timesheets = _.cloneDeep(this.timesheets);
      this.store.dispatch(editRow({ index: 0, fromNew: true }));
    } else {
      this.saveNewRow();
    }
  }

  public cancelNewRow() {
    this.timesheets.shift();
    this.store.dispatch(cancelEdit({ index: 0 }));
  }

  public saveNewRow() {
    this.store.dispatch(addOne({ data: this.timesheets[0] }));
    this.hasNewRow = false;
  }

  public submitEditing() {
    const dataMap = new Map<number, TimeSheet>();
    this.timesheets.forEach((_ts, index) => {
      if(this.editingRows.includes(index)){
        dataMap.set(index, this.timesheets[index]);
      }
    });

    this.store.dispatch(submitRows({ dataMap, includesNew: this.hasNewRow}));
  }
}
