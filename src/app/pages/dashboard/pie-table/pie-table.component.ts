import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-pie-table',
  templateUrl: './pie-table.component.html',
  styleUrls: ['./pie-table.component.css']
})
export class PieTableComponent implements OnInit {

  pieChartSetTable: Set<User>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadAllTable(1);
  }
  // HEADER TOKEN
  /*
  loadAllTable(selectedCategory: number) {
    this.dashboardService.findAllPieTable(selectedCategory).subscribe(res => {

      this.pieChartSetTable = res;

    });// pipe
  }
  */
  loadAllTable(selectedCategory: number){
    /*this.pieChartSetTable = this.dashboardService.findAllPieTable(selectedCategory);
    console.log(this.pieChartSetTable);
    return  this.pieChartSetTable ;*/
  }


}
