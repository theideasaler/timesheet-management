import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import { TimeSheetsActions, EditingActions } from '../actions/index';
import { TimesheetsService } from '../../services/timesheets.service';

@Injectable()
export class EditingStatusEffects {
  saveRow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditingActions.saveRow),
      switchMap((payload) =>
        this.timesheetsService.saveOne(payload).pipe(
          mergeMap((res) => [
            EditingActions.cancelEdit({ index: res.index, _id: res.data._id }),
            TimeSheetsActions.saveSuccess({ ...res }),
          ]),
          catchError(() => of(TimeSheetsActions.saveFailed()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private timesheetsService: TimesheetsService
  ) {}
}
