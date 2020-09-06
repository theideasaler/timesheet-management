import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginActions, AuthActions } from '../actions/index';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      switchMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          tap(() => {
              this.authService.setToken('mock jwt token');
              this.router.navigate(['/timesheet']);
            }),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
