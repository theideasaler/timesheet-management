import { Injectable } from '@angular/core';
import { Credentials } from '@models/credentials.model';
import { of, Observable, throwError } from 'rxjs';
import { User } from '@models/user.model';
import { delay } from 'rxjs/operators';

const userList: User[] = [
  {
    username: 'admin',
    password: 'practiceEvolve2020',
    name: 'Neo',
    role: 'admin',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(credentials: Credentials): Observable<User> {
    const validUser = this.checkAuth(credentials);
    if (!validUser) {
      return throwError('Invalid credentials');
    }
    return of(validUser).pipe(delay(250));
  }

  private checkAuth(credentials: Credentials) {
    let userLoggedIn: User;
    for (const user of userList) {
      if (
        user.username === credentials.username &&
        user.password === credentials.password
      ) {
        userLoggedIn = user;
        break;
      }
    }
    return userLoggedIn;
  }

  public logout() {
    localStorage.clear();
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
