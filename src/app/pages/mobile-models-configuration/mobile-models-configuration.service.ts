import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';
import { MobileModelsConfigurationDetail } from './model/MobileModelsConfigurationDetail';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class MobileModelsConfigurationService {
  
  constructor(private httpClient: HttpClient) { }
 
  loadAll(): Observable<MobileModelsConfiguration[]> {
    return this.httpClient.get<MobileModelsConfiguration[]>(`${baseUrl}/rest/config/models`);
  }

  loadDetail(idModel:string): Observable<MobileModelsConfigurationDetail> {
    return this.httpClient.get<MobileModelsConfigurationDetail>(`${baseUrl}/rest/config/details/`+idModel);
  }
}