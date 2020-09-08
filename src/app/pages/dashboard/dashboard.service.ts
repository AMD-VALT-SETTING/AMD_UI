import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Alarms } from './model/Alarms';
import { AppConstants } from 'app/app.constants';
import { UpdateAlarm } from './model/UpdateAlarm';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  
  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/pie`).pipe(catchError(this.handleError));
  }

  findUsersForLabelPieTable(selectedCategory: number): Observable<any> {
    return this.httpClient.get<User[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/detail/` + selectedCategory).pipe(catchError(this.handleError));
  }

  getDataAllarms (): Observable<Alarms[]> {
    return this.httpClient.get<Alarms[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/alarms`).pipe(catchError(this.handleError));
  }

  updateAlarm(idAlarm: UpdateAlarm): Observable<UpdateAlarm> {
    return this.httpClient.put<UpdateAlarm>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/switchAlarmOff`, idAlarm).pipe(catchError(this.handleError));
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



