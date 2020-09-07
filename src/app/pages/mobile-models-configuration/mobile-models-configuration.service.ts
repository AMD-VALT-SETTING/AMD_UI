import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';
import { MobileModelsConfigurationDetail } from './model/MobileModelsConfigurationDetail';
import { AppConstants } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MobileModelsConfigurationService {

  constructor(private httpClient: HttpClient) { }

  loadAll(): Observable<MobileModelsConfiguration[]> {
    return this.httpClient.get<MobileModelsConfiguration[]>(`${AppConstants.SERVICES_BASE_URL}/rest/config/models`);
  }

  loadDetail(idModel: string): Observable<MobileModelsConfigurationDetail> {
    return this.httpClient.get<MobileModelsConfigurationDetail>(`${AppConstants.SERVICES_BASE_URL}/rest/config/details/` + idModel);
  }
}
