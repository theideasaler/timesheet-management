import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { LoginActions } from '@store/actions/index';
import { Observable } from 'rxjs';
import { AuthState } from '@store/reducers/auth.reducer';
import { selectAuthFeature } from '@store/index.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error$: Observable<AuthState> = this.store.pipe(
    select(selectAuthFeature)
  );
  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthState }>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['practiceEvolve2020', [Validators.required]],
    });
  }

  public login() {
    this.store.dispatch(
      LoginActions.login({ credentials: this.loginForm.value })
    );
  }
}
