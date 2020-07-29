import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';

const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  u1: User;
  u2: User;
  u3: User;
  u4: User;

  constructor(private httpClient: HttpClient) { }

  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${baseUrl}/rest/dashboard/pie`);
  }

  findAllPieTable(selectedCategory: number) {

    this.u1 = { userNameApp: 'usernameapp1', userAliasApp: 'useraliasapp1', phoneNumber: 'phonenumber1' }
    this.u2 = { userNameApp: 'usernameapp2', userAliasApp: 'useraliasapp2', phoneNumber: 'phonenumber2' }
    this.u3 = { userNameApp: 'usernameapp3', userAliasApp: 'useraliasapp3', phoneNumber: 'phonenumber3' }
    this.u4 = { userNameApp: 'usernameapp4', userAliasApp: 'useraliasapp4', phoneNumber: 'phonenumber4' }
/*
    if (selectedCategory === 1) { 
      this.userTablePie.add(this.u1);
    }

    if (selectedCategory === 2) { this.userTablePie.add(this.u2);}

    if (selectedCategory === 3) { 
      this.userTablePie.add(this.u3);
    }

    if (selectedCategory === 4) { this.userTablePie.add(this.u4);}


    return this.userTablePie;*/
  }
}

