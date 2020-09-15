import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { DashboardService } from '../dashboard.service';
import { DashboardEvent } from '../DashboardEvent';
import { Input } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-pie-table',
  templateUrl: './pie-table.component.html',
  styleUrls: ['./pie-table.component.css']
})
export class PieTableComponent {

  dashboardfeedbackReceived: DashboardEvent;
  _userArraySelected: User[];
  _labelPie: string;

  get userArraySelected() {
    return this._userArraySelected;
  }

  @Input()
  set userArraySelected(u: User[]) {
    this._userArraySelected = u;
  }

  get labelPie() {
    return this._labelPie;
  }

  @Input()
  set labelPie(label: string) {
    this._labelPie = label;
  }

  feedbackReceivedHandler(dEvent: DashboardEvent) {
    this.dashboardfeedbackReceived = dEvent;
    this.userArraySelected = this.dashboardfeedbackReceived.dashboardEvent;
  }
}
