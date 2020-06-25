import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../providers/auth.service';

import {
  ChartComponent,
      ApexAxisChartSeries,
      ApexChart,
      ApexXAxis,
      ApexDataLabels,
      ApexTooltip,
      ApexStroke,
        ApexNonAxisChartSeries,
        ApexPlotOptions,
} from 'ng-apexcharts';
import {PopoverController} from '@ionic/angular';
import {PopoverComponent} from './popover.component';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    colors: any;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
};

export type ChartOptions1 = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    stroke: ApexStroke;
    plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})


export class DashboardPage implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;

  @ViewChild('chart2') chart2: ChartComponent;
  public chartOptions2: Partial<ChartOptions1>;


  public folder: string;

  public scrollPosition = 0;
  public borderLimit = false;
  dataSource: {};
  dataSource1: {};
  dataSource2: {};
    constructor(
      private activatedRoute: ActivatedRoute,
      public authService: AuthService,
      public popoverController: PopoverController
  ) {
    this.chartOptions = {
        chart: {
            height: 150,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            // foreColor: '#373d3f',
        },
        // colors: ['#7367F0'],
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        series: [{
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55]
        }],

        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },

        tooltip: {
            x: { show: false }
        },
      };
    this.chartOptions1 = {
          chart: {
              height: 150,
              type: 'area',
              toolbar: {
                  show: false,
              },
              sparkline: {
                  enabled: true
              },
          },
          colors: ['#28C76F'],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 2.5
          },
          series: [{
              name: 'Revenue',
              data: [350, 275, 400, 300, 350, 300, 450]
          }],

          xaxis: {
              labels: {
                  show: false,
              },
              axisBorder: {
                  show: false,
              }
          },
          tooltip: {
              x: { show: false }
          },
      };
    this.chartOptions2 = {
        chart: {
            height: 250,
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                blur: 3,
                left: 1,
                top: 1,
                opacity: 0.1
            },
        },
        plotOptions: {
            radialBar: {
                // size: 110,
                startAngle: -150,
                endAngle: 150,
                hollow: {
                    size: '77%',
                },
                track: {
                    background: '#b9c3cd',
                    strokeWidth: '50%',
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 18,
                        color: '#99a2ac',
                        fontSize: '4rem'
                    }
                }
            }
        },
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //         shade: 'dark',
        //         type: 'horizontal',
        //         shadeIntensity: 0.5,
        //         gradientToColors: ['#00b5b5'],
        //         inverseColors: true,
        //         opacityFrom: 1,
        //         opacityTo: 1,
        //         stops: [0, 100]
        //     },
        // },
        series: [83],
        stroke: {
            lineCap: 'round'
        },
    };

    const dataSource = {
          chart: {
            caption: 'Revenue Generated',
            subCaption: 'Last month',
            xAxisName: 'Week',
            yAxisName: 'Units sold',
            xAxisLineThickness: '1',
            theme: 'fusion'
          },
          data: [
            {
              label: 'Week 1',
              value: '530'
            },
            {
              label: 'Week 2',
              value: '660'
            },
            {
              label: 'Week 3',
              value: '420'
            },
            {
              label: 'Week 4',
              value: '580'
            },
            {
              label: 'Week 5',
              value: '560'
            }
          ]
        };
        this.dataSource = dataSource;
    this.dataSource1 = {
            chart: {
                caption: 'Sales of Liquor',
                subCaption: 'Last week',
                xAxisName: 'Day',
                yAxisName: 'Sales (In USD)',
                numberPrefix: '$',
                showValues: '1',
                theme: 'fusion'
            },
            data: [
                {
                    label: 'Mon',
                    value: '4123'
                },
                {
                    label: 'Tue',
                    value: '4633'
                },
                {
                    label: 'Wed',
                    value: '5507'
                },
                {
                    label: 'Thu',
                    value: '4910'
                },
                {
                    label: 'Fri',
                    value: '5529'
                },
                {
                    label: 'Sat',
                    value: '5803'
                },
                {
                    label: 'Sun',
                    value: '6202'
                }
            ]
        };
    this.dataSource2 = {
            chart: {
                caption: 'Split of Visitors by Age Group',
                subCaption: 'Last year',
                use3DLighting: '0',
                showPercentValues: '1',
                decimals: '1',
                useDataPlotColorForLabels: '1',
                theme: 'fusion'
            },
            data: [
                {
                    label: 'Teenage',
                    value: '1250400'
                },
                {
                    label: 'Adult',
                    value: '1463300'
                },
                {
                    label: 'Mid-age',
                    value: '1050700'
                },
                {
                    label: 'Senior',
                    value: '491000'
                }
            ]
        };
  }

    public generateData(baseval, count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ionViewWillEnter() {
        this.authService.disableMenu = false;
    }

    ionViewWillLeave() {
        this.authService.disableMenu = true;
    }

    logScrolling(e) {
        this.borderLimit = (e.detail.scrollTop > 20);
    }

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true
        });
        return await popover.present();
    }
}
