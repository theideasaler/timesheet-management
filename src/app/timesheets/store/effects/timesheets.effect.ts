import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TimeSheetsActions } from '../actions/index';
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

  constructor(
    private actions$: Actions,
    private timesheetsService: TimesheetsService
  ) {}
}
