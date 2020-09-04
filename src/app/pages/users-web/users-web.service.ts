import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsersWebList } from './model/UsersWebList';
import { catchError } from 'rxjs/internal/operators/catchError';
import { UsersWeb } from './model/UsersWeb';
import { UserDeleteRequest } from './model/UserDeleteRequest';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class UsersWebService {
  userError: any;

  constructor(private httpClient: HttpClient) { }

  loadAllUsersWeb(): Observable<UsersWebList[]> {
    return this.httpClient.get<UsersWebList[]>(`${baseUrl}/rest/users/search`);
  }

  addUser(u: UsersWeb): Observable<UsersWeb> {

    return this.httpClient.post<UsersWeb>(`${baseUrl}/rest/users/create`, u).pipe(catchError(this.handleError));

  }
 deleteUserWeb(idUser:UserDeleteRequest): Observable<string> {

    return this.httpClient.post<string>(`${baseUrl}/rest/users/delete`, idUser).pipe(catchError(this.handleError));

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

