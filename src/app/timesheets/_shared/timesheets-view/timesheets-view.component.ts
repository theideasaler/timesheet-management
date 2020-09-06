import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TimesheetState } from '../../store/reducers/timesheet.reducer';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-timesheets-view',
  templateUrl: './timesheets-view.component.html',
  styleUrls: ['./timesheets-view.component.scss'],
})
export class TimesheetsViewComponent implements OnInit, OnChanges {
  @Input() timesheets: TimesheetState;
  public dataCopy: TimesheetState;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.timesheets) {
      this.dataCopy = JSON.parse(
        JSON.stringify(changes.timesheets.currentValue)
      );
    }
  }

  ngOnInit(): void {}

  public trackByFn(index: number) {
    return index;
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.dataCopy.visibleFields,
      event.previousIndex,
      event.currentIndex
    );
  }
}
