import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsersWeb } from './model/UsersWeb';
import { catchError } from 'rxjs/internal/operators/catchError';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class UsersWebService {
  userError: any;

  constructor(private httpClient: HttpClient) { }

  loadAllUsersWeb(): Observable<UsersWeb[]> {
    return this.httpClient.get<UsersWeb[]>(`${baseUrl}/rest/users/search`);
  }

  addUser(u: UsersWeb): Observable<UsersWeb> {

    return this.httpClient.post<UsersWeb>(`${baseUrl}/rest/users/create`, u).pipe(catchError(this.handleError));

  }
  private handleError(error: HttpErrorResponse) {
    this.userError = error;
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      console.error(`Backend returned error: ${JSON.stringify(error)}`);

    }

    return throwError(error);
  }

}

