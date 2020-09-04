import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from './model/License';


const baseUrl = 'http://red.valtellina.com:65088';
@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private httpClient: HttpClient) { }
  //PROBABILE PROBLEMA PER IL MODEL LICENSE
loadAll(): Observable<License> {
    return this.httpClient.get<License>(`${baseUrl}/rest/license/get`);
  }
}
