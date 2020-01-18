import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogExampleComponent} from 'src/app/dialog-example/dialog-example.component';


@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
  this.dialog.open(DialogExampleComponent);
  }

  ngOnInit() {
  }

}
