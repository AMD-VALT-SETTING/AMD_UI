import Chart from 'chart.js';

import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DashboardService } from './dashboard.service';
import { User } from 'app/model/User';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  public canvas: any;
  public ctx;
  public pieChart;
  pieChartTableArray: User[];
  private sub: Subscription;
  pos: number;

  constructor(private dashboardService: DashboardService) {
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

            console.log('onClick dashboard= ' + label);
            this.buildPieChartTable(label);
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
    });
  }

  buildPieChartTable(label: any) {
    
   
     if (label === 'Utenze in allarme') {
      this.pos = 1;
    } else if (label === 'Utenze non localizzate') {
      this.pos = 2;
    } else if (label === 'Utenze con GPS ok') {
      this.pos = 3;
    } else if (label === 'Utenze inattive') {
      this.pos = 4;
    }

    console.log(this.pos);

    if (this.pos === 1) {
      this.pieChartTableArray = [
        {
          userNameApp: 'MarioRossi',
          userAliasApp: 'M.Rossi',
          phoneNumber: '11111111',
        },
      ];
    }
    if (this.pos === 2) {
      this.pieChartTableArray = [
        {
          userNameApp: 'MarioGiallo',
          userAliasApp: 'M.Giallo',
          phoneNumber: '11111111',
        },
      ];
    }
    if (this.pos === 3) {
      this.pieChartTableArray = [
        {
          userNameApp: 'MarioVerde',
          userAliasApp: 'M.Verde',
          phoneNumber: '11111111',
        },
      ];
    }
    if (this.pos === 4) {
      this.pieChartTableArray = [
        {
          userNameApp: 'MarioGrigio',
          userAliasApp: 'M.Grigio',
          phoneNumber: '11111111',
        },
      ];
    }

    //pos = 0;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
