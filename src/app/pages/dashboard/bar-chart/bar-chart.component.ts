import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';
import { DashboardService } from '../dashboard.service';
import { isNgTemplate } from '@angular/compiler';
import { Alarms } from '../model/Alarms';
import { unique } from 'jquery';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy {

  public canvas: any;
  public ctx;
  public barChart;
  private sub: Subscription;

  allarmFalls = new Array<number>();
  allarmFallsCounter: number;

  allarmImmobilities = new Array<number>();
  allarmImmobilitiesCounter: number;

  allarmCrashes = new Array<number>();
  allarmCrashesCounter: number;

  allarms: Alarms[];
  //dates: string[];
  datesU: string[];
  allarmsDateOrdered: string[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.drawBarChart();

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.barChart = new Chart(this.ctx, {
      type: 'bar',

      data: {
        labels: [], //'3/08/2020', '4/08/2020', '5/08/2020
        datasets: [

          { label: 'Caduta', backgroundColor: '#FF0000', data: this.allarmFalls },
          { label: 'Immmobilità', backgroundColor: '#666362', data: this.allarmImmobilities },
          { label: 'Schianto', backgroundColor: '#000000', data: this.allarmCrashes },

        ]

      }
      ,
      options: {


        scales: {
          xAxes: [{
            beginAtZero: true,
            ticks: {
              autoSkip: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.sub = interval(86400000)//24h
      .subscribe((val) => {
        console.log('refresh BarChart called');
        console.log(val);

        this.drawBarChart();
      });
  }

  drawBarChart() {

    this.dashboardService.getDataAllarms().subscribe((res) => {
      console.log(JSON.stringify(res));
      this.allarms = res['listaAlarms'];
      let dates :string[]= this.allarms.map((item) => item.date);


      
      console.log('Date ' + dates);
     const datesY = this.datesOrder(this.datesNoDuplicateDate(dates));
     

      this.allarmsCouter(this.allarms, dates);
   
      this.barChart.data.labels=datesY;
      this.barChart.update();


    });
  
  }

  datesNoDuplicateDate(dates: string[]): string[] {

    // Prima rimuovo i doppioni
    for (let d = 0; d < dates.length; d++) {

      if (this.datesU == undefined) { this.datesU = [dates[d]] }
      else if (this.datesU.includes(dates[d])) { console.log('già c è'); }
      else { this.datesU.push(dates[d]); }
    }

    return this.datesU;
  }

  datesOrder(dates: string[]): string[] {
    for (let i = 0; i < dates.length; i++) {
      for (let j = 0; j < dates.length - 1; j++) {

        if (dates[j] > dates[j + 1]) {
          let swap = dates[j];
          dates[j] = dates[j + 1];
          dates[j + 1] = swap;
        }
      }
    }
    console.log('finale= ' + dates);


    return dates;
  }
  allarmsCouter(allarms8Gg: Alarms[], datesO: string[]) {
    this.allarmFallsCounter = 0;
    this.allarmImmobilitiesCounter = 0;
    this.allarmCrashesCounter = 0;


    for (let d of datesO) { //per ogni data

      for (let a of allarms8Gg) { //per ogni allarme

        if (a.date === d && a.alarmType === 'Caduta') {
          this.allarmFallsCounter++;
        }
        else if (a.date === d && a.alarmType === 'Immobilità') {

          this.allarmImmobilitiesCounter++;

        }

        else if (a.date === d && a.alarmType === 'Schianto') {
          this.allarmCrashesCounter++;

        }

      }
      console.log('Stop');

      this.allarmFalls.push(this.allarmFallsCounter);
      this.allarmFallsCounter = 0;


      this.allarmImmobilities.push(this.allarmImmobilitiesCounter);
      this.allarmImmobilitiesCounter = 0;

      this.allarmCrashes.push(this.allarmCrashesCounter);
      this.allarmCrashesCounter = 0;

    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}





