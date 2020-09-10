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
        this.alarmsError = error;
      });
  }

  loadAllarms() {
    this.dashboardService.getDataAllarms().subscribe((res: any) => {
      this.alarms = res.listaAlarms;
    },
    (error) => {
      this.alarmsError = error;
      if (error.status === 401) {
        if (error.error.errorCode === 120) {
          this.alarmsError = 'Errore imprevisto';
        }
      } else {
        this.alarmsError = 'Errore imprevisto';
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
