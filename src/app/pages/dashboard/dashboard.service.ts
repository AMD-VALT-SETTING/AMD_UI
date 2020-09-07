import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Alarms } from './model/Alarms';
import { AppConstants } from 'app/app.constants';
import { UpdateAlarm } from './model/UpdateAlarm';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  
  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/pie`);
  }

  findUsersForLabelPieTable(selectedCategory: number): Observable<any> {
    return this.httpClient.get<User[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/detail/` + selectedCategory);
  }

  getDataAllarms (): Observable<Alarms[]> {
    return this.httpClient.get<Alarms[]>(`${AppConstants.SERVICES_BASE_URL}/rest/dashboard/alarms`);
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



