import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { DashboardService } from '../dashboard.service';
import { DashboardEvent } from '../DashboardEvent';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pie-table',
  templateUrl: './pie-table.component.html',
  styleUrls: ['./pie-table.component.css']
})
export class PieTableComponent {

  dashboardfeedbackReceived: DashboardEvent;
  _userArraySelected: User[];

  get userArraySelected() {
    return this._userArraySelected;
  }

  @Input()
  set userArraySelected(u: User[]) {
    this._userArraySelected = u;
  }

  feedbackReceivedHandler(dEvent: DashboardEvent) {
    this.dashboardfeedbackReceived = dEvent;
    this.userArraySelected = this.dashboardfeedbackReceived.dashboardEvent;
  }
}
