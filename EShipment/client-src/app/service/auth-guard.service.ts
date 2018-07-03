import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      window.location.href = 'account/login';
      return false;
    }
    return true;
  }
}
