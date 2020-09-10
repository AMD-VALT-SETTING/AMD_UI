import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from 'app/app.constants';
import { ResetPwdModel } from '../../model/ResetPwdModel';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResetPwdService {

  pwdError: any;

  constructor(private httpClient: HttpClient) { }

  resetPassword(user: ResetPwdModel): Observable<any> {
    return this.httpClient.post(`${AppConstants.SERVICES_BASE_URL}/rest/users/change`, user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    this.pwdError = error;
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned error: ${JSON.stringify(error)}`);
    }
    return throwError(error);
  }
}
