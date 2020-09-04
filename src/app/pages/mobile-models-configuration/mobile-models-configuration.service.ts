import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';
import { MobileModelsConfigurationDetailResult } from './model/MobileModelsConfigurationDetailResult';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class MobileModelsConfigurationService {
  
  constructor(private httpClient: HttpClient) { }
 
  loadAll(): Observable<MobileModelsConfiguration[]> {
    return this.httpClient.get<MobileModelsConfiguration[]>(`${baseUrl}/rest/config/models`);
  }

  loadDetail(idModel:string): Observable<MobileModelsConfigurationDetailResult> {
    return this.httpClient.post<MobileModelsConfigurationDetailResult>(`${baseUrl}/rest/config/details/`,idModel);
  }
}