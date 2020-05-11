import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/list-filters-type/type';
import { Country } from 'src/app/list-filters-countries/country';
import { Site } from 'src/app/list-filters-sites/site';
import { Susar } from 'src/app/susars/susar';
import { SusarService } from 'src/app/susars/susar.service';
import { InteractionService } from 'src/app/susars/interaction.service';
import { Observable } from 'rxjs/Observable';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { DashboardPipe } from 'src/app/dashboards/dashboardPipe';
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
  countriesAoR: Country[];
  sitesAoR: Site[];

  // Pie1
  public pieChartOptions: ChartOptions = {
    title: {
      text: 'SUSAR Types',
      display: true
    },
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontSize: 9
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
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
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(100,100,255,0.3)', 'rgba(100,0,100,0.3)', 'rgba(255,255,100,0.3)', 'rgba(255,255,0,0.5)', 'rgba(0,200,255,0.4)', 'rgba(250,0,0,0.2)'],
    },
  ];

  // Pie2
  public pieChartOptions2: ChartOptions = {
    title: {
      text: 'Number of AoR per Country',
      display: true
    },
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontSize: 9
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels2: Label[] = [];
  public pieChartData2: number[] = [];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [pluginDataLabels];
  public pieChartColors2 = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(100,100,255,0.3)', 'rgba(100,0,100,0.3)', 'rgba(255,255,100,0.3)', 'rgba(255,255,0,0.5)', 'rgba(0,200,255,0.4)', 'rgba(250,0,0,0.2)'],
    },
  ];

  //Bar1

  public barChartOptions3: ChartOptions = {
    title: {
      text: 'Number of AoR per Site',
      display: true
    },
    legend: {
      position: 'left',
      labels: {
        fontSize: 9
      }
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'center',
        align: 'top',
      }
    }
  };
  public barChartLabels3: Label[] = [];
  public barChartType3: ChartType = 'bar';
  public barChartLegend3 = true;
  public barChartPlugins3 = [pluginDataLabels];

  public barChartData3: ChartDataSets[] = [
    { data: [], label: 'Series A' },
    { data: [], label: 'Series B' }
  ];























  constructor(private _susarservice: SusarService, private _dashboardPipe: DashboardPipe, private _interactionService: InteractionService) { }

  ngOnInit() {



    this._susarservice.getSusars().subscribe(response => {
      console.log(response);
      this.allSusars = response;
    });

    this._susarservice.getTypes().subscribe(response => {
      console.log(response);
      this.types = response;
      const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
      this.pieChartLabels = this.removeDuplicates(duplicates);



      console.log(this.types);
      this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);

    });

    this._susarservice.getCountries().subscribe(response => {
      console.log(response);
      this.countriesAoR = response;
      const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
      this.pieChartLabels2 = this.removeDuplicates(duplicates2);


      console.log(this.countriesAoR);
      this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
    });

    this._susarservice.getSites().subscribe(response => {
      console.log(response);
      this.sitesAoR = response;
      const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
      this.barChartLabels3 = this.removeDuplicates(duplicates3);


      this.barChartData3 = [
        { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
        { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
      ];
    });



    this._interactionService.filterStudiesMessage$
      .subscribe(
        message => {
          if (message.length > 0) {
            const messageSplit = (message + '').split(",");
            this.studies = messageSplit;
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ];
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3);
            console.log("Pies" + this.pieChartLabels)
          } else {
            this.studies = [];
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ];
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
          }
        }
      );

    this._interactionService.filterCountriesMessage$
      .subscribe(
        message => {
          if (message.length > 0) {
            const messageSplit = (message + '').split(",");
            this.countries = messageSplit;
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ]
              ;
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
          } else {
            this.countries = [];
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ];
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
          }
        }
      );

    this._interactionService.filterSitesMessage$
      .subscribe(
        message => {
          console.log('message' + message.length);
          if (message.length > 0) {
            const messageSplit = (message + '').split(",");
            console.log('uuu' + messageSplit.length);
            this.sites = messageSplit;
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ];
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
          } else {
            this.sites = [];
            this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
            this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
            this.barChartData3 = [
              { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
              { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
            ];
            const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
            this.pieChartLabels = this.removeDuplicates(duplicates)
            const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
            this.pieChartLabels2 = this.removeDuplicates(duplicates2);
            const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
            this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
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
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'bottom' : 'left';
    this.pieChartOptions2.legend.position = this.pieChartOptions2.legend.position === 'left' ? 'bottom' : 'left';
    this.barChartOptions3.legend.position = this.barChartOptions3.legend.position === 'left' ? 'bottom' : 'left';
  }

  ToggleLegend() {
    this.pieChartLegend = !this.pieChartLegend
    this.pieChartLegend2 = !this.pieChartLegend2
    this.barChartLegend3 = !this.barChartLegend3
  }

  refresh() {
    this.pieChartData = this._dashboardPipe.transform(this.allSusars, this.types, this.studies, this.countries, this.sites);
    this.pieChartData2 = this._dashboardPipe.transformAoR(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites);
    this.barChartData3 = [
      { data: this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Applicable' },
      { data: this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites), label: 'AoR Missing' }
    ];
    const duplicates = this._dashboardPipe.transformOnlySelectedTypes(this.allSusars, this.types, this.studies, this.countries, this.sites).map(susar => susar.type);
    this.pieChartLabels = this.removeDuplicates(duplicates)
    const duplicates2 = this._dashboardPipe.transformOnlySelectedCountries(this.allSusars, this.countriesAoR, this.studies, this.countries, this.sites).map(susar => susar.country);
    this.pieChartLabels2 = this.removeDuplicates(duplicates2);
    const duplicates3 = this._dashboardPipe.transformOnlySelectedSites(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites).map(susar => susar.site);
    this.barChartLabels3 = this.removeDuplicates(duplicates3).sort();
    console.log('True ' + this._dashboardPipe.transformAoRSiteTrue(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites));
    console.log('False ' + this._dashboardPipe.transformAoRSiteFalse(this.allSusars, this.sitesAoR, this.studies, this.countries, this.sites));
    console.log('label ' + this.barChartLabels3);

  }



  removeDuplicates(duplicates: string[]): string[] {
    var noDuplicatesArray: string[] = []
    for (let duplicate of duplicates) {

      if (noDuplicatesArray.indexOf(duplicate) === -1) {
        noDuplicatesArray.push(duplicate)
      }
    }
    return noDuplicatesArray;
  }


}
