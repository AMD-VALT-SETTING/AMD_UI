import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Alarms } from './model/Alarms';
import { catchError } from 'rxjs/operators';
import { UpdateAlarm } from './model/UpdateAlarm';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  
  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${baseUrl}/rest/dashboard/pie`);
  }

  findUsersForLabelPieTable(selectedCategory: number): Observable<User[]> {
    
    return this.httpClient.post<User[]>(`${baseUrl}/rest/dashboard/detail`,selectedCategory);
  }
  getDataAllarms (): Observable<Alarms[]> {
    return this.httpClient.get<Alarms[]>(`${baseUrl}/rest/dashboard/switchAlarmOff`)
    .pipe(catchError(this.handleError));
  }

  updateAlarm(idAlarm:UpdateAlarm):Observable<UpdateAlarm>{
    return this.httpClient.put<UpdateAlarm>(baseUrl, idAlarm)
    .pipe(catchError(this.handleError));
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

