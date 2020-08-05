import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppConstants } from 'app/app.constants';
import { LoggedUser } from 'app/model/LoggedUser';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    const loggedUser: LoggedUser = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));

    if ( !this.auth.isAuthenticated() || !loggedUser.authorities.includes('300') ) {// 300 sta per admin
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
