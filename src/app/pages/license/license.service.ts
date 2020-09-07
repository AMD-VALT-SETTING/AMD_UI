import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from './model/License';
import { AppConstants } from 'app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private httpClient: HttpClient) { }

loadAll(): Observable<License> {
    return this.httpClient.get<License>(`${AppConstants.SERVICES_BASE_URL}/rest/license/get`);
  }

}
