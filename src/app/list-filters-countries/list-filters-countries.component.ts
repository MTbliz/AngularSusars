import { Component, OnInit } from '@angular/core';
import {Country} from 'src/app/list-filters-countries/country';
import {SusarService } from 'src/app/susars/susar.service';
import {Observable} from 'rxjs/Observable';
import{InteractionService} from 'src/app/susars/interaction.service';

@Component({
  selector: 'app-list-filters-countries',
  templateUrl: './list-filters-countries.component.html',
  providers: [SusarService],
  styleUrls: ['./list-filters-countries.component.css']
})
export class ListFiltersCountriesComponent implements OnInit {

  selectedOption;

  onNgModelChange($event){
      console.log($event);
      this.selectedOption=$event;
      this._interactionService.sendMessageToTableCountries(this.selectedOption);
    }

    countries: Country[];

    constructor(private susarService: SusarService, private _interactionService: InteractionService) { }

    ngOnInit() {
    this._interactionService.refreshTypesMessage$
        .subscribe(
        message => {
        if(message === 'refreshTypes') {
        this.getCountries();
        }
        }
        );
    this.getCountries();
          }

  refreshTable(){
  this._interactionService.sendMessage('refreshTable');
  }


    private getCountries(){
   this.susarService.getCountries()
            .subscribe(data => { console.log(data);
                                        this.countries = data;
    });
  }


  }


