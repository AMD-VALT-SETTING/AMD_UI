import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Alarms } from './model/Alarms';
import { AppConstants } from 'app/app.constants';

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

}



