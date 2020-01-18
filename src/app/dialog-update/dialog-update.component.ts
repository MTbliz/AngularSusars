import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SusarPost} from 'src/app/susars/susarpost';
import {SusarService } from 'src/app/susars/susar.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{InteractionService} from 'src/app/susars/interaction.service';


export interface SusarType {

value: string;
viewValue: string;

}
@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  providers: [SusarService],
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

susarstypes: SusarType[] = [
{value: 'INI', viewValue: 'INI'},
{value: 'FU01', viewValue: 'FU01'},
{value: 'FU02', viewValue: 'FU02'},
{value: 'FU03', viewValue: 'FU03'},
{value: 'FU04', viewValue: 'FU04'},
{value: 'FU05', viewValue: 'FU05'},
{value: 'FU06', viewValue: 'FU06'},
{value: 'FU07', viewValue: 'FU07'},
{value: 'FU08', viewValue: 'FU08'},
{value: 'FU09', viewValue: 'FU09'},
{value: 'FU10', viewValue: 'FU10'},
];


  constructor(public dialogRef: MatDialogRef<DialogUpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private _susarservice: SusarService, private _interactionService: InteractionService) { }

closeDialog() {
    this.dialogRef.close('CreatePanel');
  }

updateSusar(){
  console.log(this.data);
  this._susarservice.updateSusar(this.data).subscribe();


this.dialogRef.close('CreatePanel');
this.refreshTable();
this.refreshTypes();
  }

refreshTable(){
this._interactionService.sendMessage('refreshTable');
}

refreshTypes(){
this._interactionService.sendMessageToTypes('refreshTypes');
}

  ngOnInit() {
  }

}
