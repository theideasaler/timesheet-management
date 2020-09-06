import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { TimeSheet } from '@models/timesheet.model';
import { STATE } from '@models/timesheet.status';
import { Store, select } from '@ngrx/store';
import { TimeSheetModuleState } from '../../store/index.state';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';
import { deleteOne } from '../../store/actions/timesheets.actions';
import { editRow, saveRow } from '../../store/actions/editing-status.actions';
import { Observable } from 'rxjs';
import { selectEditingRows } from '../../store/index.selector';

@Component({
  selector: 'app-actions-column',
  templateUrl: './actions-column.component.html',
  styleUrls: ['./actions-column.component.scss'],
})
export class ActionsColumnComponent implements OnInit, OnChanges {
  @Input() columnName = 'Actions';
  @Input() data: TimeSheet[];
  @Output() cancel = new EventEmitter();
  @Output() saveNew = new EventEmitter();
  public editingRows$: Observable<number[]> = this.store.pipe(
    select(selectEditingRows)
  );
  public STATE = STATE;

  constructor(
    private dialog: MatDialog,
    private store: Store<{ timesheetsRoot: TimeSheetModuleState }>
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes: ', changes);
  }

  public editRow(index: number) {
    this.store.dispatch(editRow({ index }));
  }

  public deleteRow(index: number) {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.store.dispatch(deleteOne({ index, _id: this.data[index]._id }));
      }
    });
  }

  public saveRow(index: number) {
    if(this.data[index].state){
      this.store.dispatch(saveRow({ index, data: this.data[index] }));
    }else {
      this.saveNew.emit();
    }
  }

  public cancelNew(){
    this.cancel.emit();
  }
}
