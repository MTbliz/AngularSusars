import { Component, OnInit } from '@angular/core';
import {Study} from 'src/app/list-filters-studies/study';
import {SusarService } from 'src/app/susars/susar.service';
import {Observable} from 'rxjs/Observable';
import{InteractionService} from 'src/app/susars/interaction.service';

@Component({
  selector: 'app-list-filters-studies',
  templateUrl: './list-filters-studies.component.html',
  providers: [SusarService],
  styleUrls: ['./list-filters-studies.component.css']
})
export class ListFiltersStudiesComponent implements OnInit {

selectedOption;

onNgModelChange($event){
    console.log($event);
    this.selectedOption=$event;
    this._interactionService.sendMessageToTableStudies(this.selectedOption);
  }
  studies: Study[];

  constructor(private susarService: SusarService, private _interactionService: InteractionService) { }

  ngOnInit() {
  this._interactionService.refreshTypesMessage$
      .subscribe(
      message => {
      if(message === 'refreshTypes') {
      this.getStudies();
      }
      }
      );
  this.getStudies();
        }

refreshTable(){
this._interactionService.sendMessage('refreshTable');
}

  private getStudies(){
 this.susarService.getStudies()
          .subscribe(data => { console.log(data);
                                      this.studies = data;
  });
}
}
