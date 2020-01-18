import { Component, OnInit } from '@angular/core';
import {Type} from 'src/app/list-filters-type/type';
import {Susar} from 'src/app/susars/susar';
import {SusarService } from 'src/app/susars/susar.service';
import{InteractionService} from 'src/app/susars/interaction.service';
import {Observable} from 'rxjs/Observable';
import { ChartType, ChartOptions } from 'chart.js';
import{DashboardPipe} from 'src/app/dashboards/dashboardPipe';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  providers: [SusarService],
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

allSusars: Susar[] = [];
studies: string[] = [];
countries: string[] = [];
sites: string[] = [];
types: Type[];
numbers: Number[] = [];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(100,100,255,0.3)','rgba(100,0,100,0.3)','rgba(255,255,100,0.3)','rgba(255,255,0,0.5)','rgba(0,200,255,0.4)','rgba(250,0,0,0.2)'],
    },
  ];

  constructor(private _susarservice: SusarService, private _dashboardPipe: DashboardPipe, private _interactionService: InteractionService) { }

  ngOnInit() {

  this._susarservice.getSusars().subscribe(response => { console.log(response);
                                                                    this.allSusars = response;
                                                                    });

  this._susarservice.getTypes().subscribe(response => { console.log(response);
                                                                      this.types = response;
                                                                      this.pieChartLabels = this.types.map(type =>type.type);
                                                                      console.log(this.types);
                                                                     this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
                                                                      });

 this._interactionService.filterStudiesMessage$
        .subscribe(
        message => {
        if(message.length >0){
        const messageSplit = (message + '').split(",",50);
        this.studies = messageSplit;
        this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
        } else {
        this.studies = [];
        this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
        }
        }
        );

     this._interactionService.filterCountriesMessage$
            .subscribe(
            message => {
            if(message.length >0){
            const messageSplit = (message + '').split(",",50);
            this.countries = messageSplit;
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            } else {
            this.countries = [];
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            }
            }
            );

     this._interactionService.filterSitesMessage$
                 .subscribe(
                 message => {
                 console.log('message' + message.length);
                 if(message.length >0){
                 const messageSplit = (message + '').split(",",50);
                 console.log('uuu' + messageSplit.length);
                 this.sites = messageSplit;
                 this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
                 } else {
                 this.sites = [];
                 this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
                 }
                 }
                 );

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }


}
