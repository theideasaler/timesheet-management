import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import { TimeSheetsActions, EditingActions } from '../actions/index';
import { TimesheetsService } from '../../services/timesheets.service';

@Injectable()
export class TimesheetEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimeSheetsActions.loadTimeSheets),
      switchMap(() =>
        this.timesheetsService.load().pipe(
          map((items) => TimeSheetsActions.loadTimeSheetsSuccess({ items })),
          catchError(() => of(TimeSheetsActions.loadTimeSheetsFailure()))
        )
      )
    )
  );

  deleteOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimeSheetsActions.deleteOne),
      switchMap((payload) =>
        this.timesheetsService.deleteOne(payload).pipe(
          mergeMap((res) => [
            EditingActions.cancelEdit({ ...payload }),
            TimeSheetsActions.deleteSuccess({ ...res }),
          ]),
          catchError(() => of(TimeSheetsActions.deleteFailure()))
        )
      )
    )
  );

  addOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimeSheetsActions.addOne),
      switchMap((payload) =>
        this.timesheetsService.addOne(payload).pipe(
          mergeMap((item) => [
            EditingActions.cancelEdit({ index: 0, _id: item.data._id }),
            TimeSheetsActions.addOneSuccess({ ...item }),
          ]),
          catchError(() => of(TimeSheetsActions.addOneFailed()))
        )
      )
    )
  );

  submitOnes$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TimeSheetsActions.submitRows),
    switchMap((payload) =>
      this.timesheetsService.submitOnes(payload).pipe(
        mergeMap((res) => [
          EditingActions.cancelEdit({ index: res.indexes }),
          TimeSheetsActions.submitRowsSuccess({ dataMap: res.dataMap, includesNew: res.includesNew }),
        ]),
        catchError(() => of(TimeSheetsActions.submitRowsFailed()))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private timesheetsService: TimesheetsService
  ) {}
}
