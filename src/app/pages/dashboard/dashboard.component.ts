import Chart from 'chart.js';

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public pieChart;

  constructor(private dashboardService: DashboardService) {}

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
        labels: []
      },

      options: {
        legend: {
          display: true,
        },

        onClick: (evt, item) => {
          if ( item.length > 0 ) {
            let index = item[0]['_index'];
            let label = item[0]['_chart'].data.labels[index];
            let values = item[0]['_chart'].data.datasets[0].data[index];
            alert(label);
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
      }
    });
    this.drawPieChart();
  }

  drawPieChart() {
    this.dashboardService.getDataForPieChart().subscribe((res) => {
      console.log(JSON.stringify(res));
      const labels: string[] = res['listaPieChart'].map((item) => item.description);
      const values: number[] = res['listaPieChart'].map((item) => item.value);
      const colors: number[] = res['listaPieChart'].map((item) =>
        item.name.toLowerCase()
      );
      console.log(labels);
      console.log(values);
      console.log(colors);
      this.pieChart.data.labels = labels;
      this.pieChart.data.datasets[0].backgroundColor = colors;
      this.pieChart.data.datasets[0].data = values;
      this.pieChart.update();
    });
  }
}
