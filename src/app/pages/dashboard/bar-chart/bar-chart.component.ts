import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';
import { DashboardService } from '../dashboard.service';
import { isNgTemplate } from '@angular/compiler';
import { Alarms } from '../model/Alarms';
import { unique } from 'jquery';
import { Observable, Subscription, interval } from 'rxjs';
import { AlarmsBarChart } from '../model/AlarmsBarChart';

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
  barChartError: any;

  alarmFallsTrue = new Array<number>();
  alarmFallsFalse = new Array<number>();
  alarmFallsCounterTrue: number;
  alarmFallsCounterFalse: number;

  alarmImmobilitiesTrue = new Array<number>();
  alarmImmobilitiesFalse = new Array<number>();
  alarmImmobilitiesCounterTrue: number;
  alarmImmobilitiesCounterFalse: number;

  alarmCrashesTrue = new Array<number>();
  alarmCrashesFalse = new Array<number>();
  alarmCrashesCounterTrue: number;
  alarmCrashesCounterFalse: number;



  alarms: AlarmsBarChart[];
  datesU: string[] = [];

  alarmsDateOrdered: string[]; //LE DATE SONO ORDINATE?
  dates: string[] = [];



  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.drawBarChart();

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.barChart = new Chart(this.ctx, {
      type: 'bar',

      data: {
        labels: this.dates,//[]
        datasets: [

          { label: 'Caduta-false', backgroundColor: '#0000cc', data: this.alarmFallsFalse },//#FF0000
          { label: 'Caduta-true', backgroundColor: '#ff6600', data: this.alarmFallsTrue },

          { label: 'Immmobilità-false', backgroundColor: '#b3b3b3', data: this.alarmImmobilitiesFalse },//#666362
          { label: 'Immmobilità-true', backgroundColor: '#ffd633', data: this.alarmImmobilitiesTrue },

          { label: 'Schianto-false', backgroundColor: '#00ccff', data: this.alarmCrashesFalse },//#000000
          { label: 'Schianto-true', backgroundColor: '#000000', data: this.alarmCrashesTrue },

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
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
    this.sub = interval(86400000)//24h
      .subscribe((val) => {
        this.drawBarChart();
      });
  }

  drawBarChart() {
    this.dashboardService.getDataForBarChart().subscribe((res) => {
      this.alarms = res['listaAlarms'];
      
      let dateRes = this.alarms.map((item) => item.date);

      if (dateRes != undefined) {
        this.dates = this.datesOrder(this.datesNoDuplicateDate(dateRes));
        this.groupSorter(this.alarms, this.dates);
        this.barChart.data.labels = this.dates;
      }


      this.barChart.update();
    }, (error) => {
      this.barChartError = error;
      if (error.status === 401) {
        if (error.error.errorCode === 120) {
          this.barChartError = 'Errore imprevisto';
        }
      } else {
        this.barChartError = 'Errore imprevisto';
      }
      });
  }

  groupSorter(alarmsSorter: AlarmsBarChart[], datesSorter: string[]) {//crea array di number per ogni tipo di allarme
    
    this.alarmFallsCounterTrue = 0;
    this.alarmFallsCounterFalse = 0;

    this.alarmImmobilitiesCounterTrue = 0;
    this.alarmImmobilitiesCounterFalse = 0;

    this.alarmCrashesCounterTrue = 0;
    this.alarmCrashesCounterFalse = 0;

    for (let d of datesSorter) { //per ogni data

      for (let a of alarmsSorter) { //per ogni allarme
        if (a.date === d && a.alarmType === 'Caduta') {

          if (a.status) {
            this.alarmFallsCounterTrue = a.number;


          }
          else {

            this.alarmFallsCounterFalse = a.number;
          }

        }
        else if (a.date === d && a.alarmType === 'Immobilità') {

          if (a.status) {

            this.alarmImmobilitiesCounterTrue = a.number;
          }
          else {

            this.alarmImmobilitiesCounterFalse = a.number;

          }

        }
        else if (a.date === d && a.alarmType === 'Schianto') {
          if (a.status) {

            this.alarmCrashesCounterTrue = a.number;
          }
          else {

            this.alarmCrashesCounterFalse = a.number;
          }



        }

      }
      //prima di passare alla data successiva aggiungo ad un array di number dello specifico evento il numero di eventi di quel tipo del giorno

      this.alarmFallsTrue.push(this.alarmFallsCounterTrue);
      this.alarmFallsFalse.push(this.alarmFallsCounterFalse);
      this.alarmFallsCounterTrue = 0;
      this.alarmFallsCounterFalse = 0;

      this.alarmImmobilitiesTrue.push(this.alarmImmobilitiesCounterTrue);
      this.alarmImmobilitiesFalse.push(this.alarmImmobilitiesCounterFalse);
      this.alarmImmobilitiesCounterTrue = 0;
      this.alarmImmobilitiesCounterFalse = 0;

      this.alarmCrashesTrue.push(this.alarmCrashesCounterTrue);
      this.alarmCrashesFalse.push(this.alarmCrashesCounterFalse);
      this.alarmCrashesCounterTrue = 0;
      this.alarmCrashesCounterFalse = 0;

    }


  }
  datesOrder(dates: string[]): string[] {//mette in ordine crescente le date
    for (let i = 0; i < dates.length; i++) {
      for (let j = 0; j < dates.length - 1; j++) {

        if (dates[j] > dates[j + 1]) {
          let swap = dates[j];
          dates[j] = dates[j + 1];
          dates[j + 1] = swap;
        }
      }
    }
    return dates;
  }

  datesNoDuplicateDate(dates: string[]): string[] {//tolgo le date uguali che arrivano dal servizio

    // Prima rimuovo i doppioni
    for (let d = 0; d < dates.length; d++) {

      if (this.datesU == undefined) { this.datesU = [dates[d]] }
      else if (this.datesU.includes(dates[d])) { }
      else { this.datesU.push(dates[d]); }
    }
    
    return this.datesU;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}





