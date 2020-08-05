import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { DashboardService } from '../dashboard.service';
import { DashboardEvent } from '../DashboardEvent';

@Component({
  selector: 'app-pie-table',
  templateUrl: './pie-table.component.html',
  styleUrls: ['./pie-table.component.css']
})
export class PieTableComponent implements OnInit {


  dashboardfeedbackReceived: DashboardEvent;
  userArraySelected: User[];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }


  
  feedbackReceivedHandler(dEvent: DashboardEvent) {
    console.log('arraypietable pre event'+ this.userArraySelected);

    this.dashboardfeedbackReceived = dEvent;

    this.userArraySelected = this.dashboardfeedbackReceived.dashboardEvent;
    console.log('feedbackReceivedHandler pietable= '+ this.userArraySelected);


    
  }

}


