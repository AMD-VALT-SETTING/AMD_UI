import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard.service';

import { Observable, Subscription, interval } from 'rxjs';
import { Alarms } from '../model/Alarms';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit, OnDestroy {

  

  alarmsError:any;
  alarms : Array<Alarms>;
  private sub: Subscription;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadAllarms();

    this.sub = interval(120000)
      .subscribe((val) => {
        this.loadAllarms();
      }, (error) => {
        console.log('ERRORE NEL SUBMIT');
        this.alarmsError = error;
      });
  }

  loadAllarms() {
    this.dashboardService.getDataAllarms().subscribe((res: any) => {
      this.alarms = res.listaAlarms;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
