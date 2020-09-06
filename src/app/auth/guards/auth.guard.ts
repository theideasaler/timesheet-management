import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    const localToken = this.authService.getToken();
    if (localToken && localToken === 'mock jwt token') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
