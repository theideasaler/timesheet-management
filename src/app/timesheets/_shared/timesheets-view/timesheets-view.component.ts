import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { TimeSheet } from '@models/timesheet.model';

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
  public dataReady = false;

  constructor(readonly cd: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges) {
    [
      'timesheets',
      'defaulthourlyRate',
      'visibleFields',
      'readOnlyFields',
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
    moveItemInArray(this.timesheets, event.previousIndex, event.currentIndex);
  }
}
