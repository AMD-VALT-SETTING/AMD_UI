import { Injectable } from '@angular/core';
import { AppConstants } from 'app/app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoginData } from './model/LoginData';
import { LoginResult } from './model/LoginResult';
import { JwtHelperService } from '@auth0/angular-jwt';

const baseURL = `${AppConstants.SERVICES_BASE_URL}/rest/dashboard/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginDataToken: LoginData;
  constructor(public httpClient: HttpClient, public jwtHelper: JwtHelperService) { }

  public authenticate(loginData: LoginData): Observable<LoginResult> {
    const headers: HttpHeaders = new HttpHeaders();

    return this.httpClient
      .post<LoginResult>(baseURL, loginData)
      .pipe(catchError(this.handleError));
  }

  public logout() {
    localStorage.setItem(AppConstants.LOGIN_STORAGE, null);
  }

  public isAuthenticated(): boolean {
    const login: LoginResult = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));
    return login !== null && login !== undefined && login.token !== undefined
                          && login.token !== undefined
                          && login.token !== '';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned error: ${JSON.stringify(error)}`);
    }
    return throwError(error);
  }
}
