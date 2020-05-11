import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/list-filters-sites/site';
import { SusarService } from 'src/app/susars/susar.service';
import { Observable } from 'rxjs/Observable';
import { InteractionService } from 'src/app/susars/interaction.service';

@Component({
  selector: 'app-list-filters-sites',
  templateUrl: './list-filters-sites.component.html',
  providers: [SusarService],
  styleUrls: ['./list-filters-sites.component.css']
})
export class ListFiltersSitesComponent implements OnInit {

  selectedOption;

  onNgModelChange($event) {
    console.log($event);
    this.selectedOption = $event;
    this._interactionService.sendMessageToTableSites(this.selectedOption);
  }

  sites: Site[];

  constructor(private susarService: SusarService, private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.refreshTypesMessage$
      .subscribe(
        message => {
          if (message === 'refreshTypes') {
            this.getSites();
          }
        }
      );
    this.getSites();
  }

  refreshTable() {
    this._interactionService.sendMessage('refreshTable');
  }

  private getSites() {
    this.susarService.getSites()
      .subscribe(data => {
        this.sites = data;
      });
  }
}


