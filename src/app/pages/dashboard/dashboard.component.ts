import Chart from 'chart.js';

import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DashboardService } from './dashboard.service';
import { User } from 'app/model/User';
import { Subscription, interval } from 'rxjs';
import { PieChartData } from './model/PieChartData';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public canvas: any;
  public ctx;
  public pieChart: Chart;
  pieChartTableArray: User[];
  private sub: Subscription;
  pos: number;
  charts: PieChartData[];
  dashboardError: any;

  constructor(private dashboardService: DashboardService) {
  }

  getAllchart() {
    this.dashboardService.getDataForPieChart().subscribe(res => {
      this.charts = res;
    });
    console.log(JSON.stringify(this.charts));
  }

  ngOnInit() {
    this.canvas = document.getElementById('chartEmail');
    this.ctx = this.canvas.getContext('2d');
    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [],
            borderWidth: 0,
            data: [],
          },
        ],
        labels: [],
      },

      options: {
        legend: {
          display: true,
        },
        
        onClick: (evt, item) => {
          if (item.length > 0) {
            let index = item[0]['_index'];
            let label = item[0]['_chart'].data.labels[index];
            let values = item[0]['_chart'].data.datasets[0].data[index];

            console.log('onClick dashboard label= ' + label);
            console.log('onClick dashboard index= ' + index);
            console.log('onClick dashboard values= ' + values);
            this.buildPieChartTable(label, index);
          }
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2,
        },

        tooltips: {
          enabled: true,
        },

        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: 'transparent',
                color: 'rgba(255,255,255,0.05)',
              },
            },
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent',
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    });
    this.drawPieChart();
    this.sub = interval(120000).subscribe((val) => {
      console.log('refresh PieChart called');
      console.log(val);

      this.drawPieChart();
    });
  }

  drawPieChart() {
    this.dashboardService.getDataForPieChart().subscribe((res) => {

      const labels: string[] = res['listaPieChart'].map(
        (item) => item.description
      );
      const values: number[] = res['listaPieChart'].map((item) => item.value);
      const colors: number[] = res['listaPieChart'].map((item) =>
        item.name.toLowerCase()
      );
      this.pieChart.data.labels = labels;
      this.pieChart.data.datasets[0].backgroundColor = colors;
      this.pieChart.data.datasets[0].data = values;
      this.pieChart.update();
    },
    (error) => {
      console.error('ERRORE RECUPERO PIECHART');
      this.dashboardError = error;
      if (error.status === 401) {
        if (error.code === 120) {
          this.dashboardError.message = 'Errore imprevisto';
          alert(this.dashboardError.message);
        }
        if (error.code === 102) {
          this.dashboardError.message = 'Utente non valido';
          alert(this.dashboardError.message);
        }
      }
    });
  }

  buildPieChartTable(label: any, index: number) {
    this.dashboardService.findUsersForLabelPieTable(index + 1).subscribe((res: any) => {
      this.pieChartTableArray = res.listaUserCategory;
      console.log(this.pieChartTableArray);
    },
    (error) => {
      console.error('ERRORE RECUPERO USER DETAIL PIECHART');
      this.dashboardError = error;
      if (error.status === 401) {
        if (error.code === 120) {
          this.dashboardError.message = 'Errore imprevisto';
          alert(this.dashboardError.message);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
