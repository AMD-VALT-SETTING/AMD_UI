import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Alarms } from './model/Alarms';

const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  
  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${baseUrl}/rest/dashboard/pie`);
  }

  findUsersForLabelPieTable(selectedCategory: number): Observable<any> {
    return this.httpClient.get<User[]>(`${baseUrl}/rest/dashboard/detail/` + selectedCategory);
  }

  getDataAllarms (): Observable<Alarms[]> {
    return this.httpClient.get<Alarms[]>(`${baseUrl}/rest/dashboard/alarms`);
  }
  
}



