import Chart from 'chart.js';

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
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
        labels: [1, 2, 3, 4],
        datasets: [
          {
            label: 'Devices',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [],
            borderWidth: 0,
            data: [],
          },
        ],
      },

      options: {
        legend: {
          display: false,
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2,
        },

        tooltips: {
          enabled: false,
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
  }

  drawPieChart() {
    this.dashboardService.getDataForPieChart().subscribe(res => {
      console.log(JSON.stringify(res));
      const values: number[] = res['listaPieChart'].map(item => item.value);
      const colors: number[] = res['listaPieChart'].map(item => item.name.toLowerCase());
      console.log(values);
      console.log(colors);
      this.pieChart.data.datasets[0].backgroundColor = colors;
      this.pieChart.data.datasets[0].data = values;
      this.pieChart.update();
    });
  }
}
