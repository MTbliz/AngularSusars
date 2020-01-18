import { Component, OnInit } from '@angular/core';
import{MyTableComponent} from 'src/app/my-table/my-table.component'
import{ListFiltersTypeComponent} from 'src/app/list-filters-type/list-filters-type.component'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
