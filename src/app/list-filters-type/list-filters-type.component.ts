import { Component, OnInit } from '@angular/core';
import {Type} from 'src/app/list-filters-type/type';
import {SusarService } from 'src/app/susars/susar.service';
import {Observable} from 'rxjs/Observable';
import{InteractionService} from 'src/app/susars/interaction.service';


@Component({
  selector: 'app-list-filters-type',
  templateUrl: './list-filters-type.component.html',
  providers: [SusarService],
  styleUrls: ['./list-filters-type.component.css']
})
export class ListFiltersTypeComponent implements OnInit {

selectedOption;

onNgModelChange($event){
    console.log($event);
    this.selectedOption=$event;
    this._interactionService.sendMessageToTableTypes(this.selectedOption);
  }

  types: Type[];

  constructor(private susarService: SusarService, private _interactionService: InteractionService) { }

  ngOnInit() {
  this._interactionService.refreshTypesMessage$
      .subscribe(
      message => {
      if(message === 'refreshTypes') {
      this.getTypes();
      }
      }
      );
  this.getTypes();
        }

refreshTable(){
this._interactionService.sendMessage('refreshTable');
}

  private getTypes(){
 this.susarService.getTypes()
          .subscribe(data => { console.log(data);
                                      this.types = data;
  });
}


}


