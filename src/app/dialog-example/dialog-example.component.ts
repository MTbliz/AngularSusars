import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SusarPost } from 'src/app/susars/susarpost';
import { SusarService } from 'src/app/susars/susar.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InteractionService } from 'src/app/susars/interaction.service';

export interface SusarType {

  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  susarstypes: SusarType[] = [
    { value: 'INI', viewValue: 'INI' },
    { value: 'FU01', viewValue: 'FU01' },
    { value: 'FU02', viewValue: 'FU02' },
    { value: 'FU03', viewValue: 'FU03' },
    { value: 'FU04', viewValue: 'FU04' },
    { value: 'FU05', viewValue: 'FU05' },
    { value: 'FU06', viewValue: 'FU06' },
    { value: 'FU07', viewValue: 'FU07' },
    { value: 'FU08', viewValue: 'FU08' },
    { value: 'FU09', viewValue: 'FU09' },
    { value: 'FU10', viewValue: 'FU10' },
  ];

  susarModel = new SusarPost('', '', '', null, null, null, null, null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(public dialogRef: MatDialogRef<DialogExampleComponent>, private http: HttpClient, private _interactionService: InteractionService) { }

  closeDialog() {
    this.dialogRef.close('CreatePanel');
  }

  createSusar() {
    console.log(this.susarModel);
    this.http.post('http://localhost:8080/Susars2', this.susarModel, this.httpOptions)
      .subscribe();
    this.dialogRef.close('CreatePanel');
    this.refreshTable();
    this.refreshTypes();
  }

  refreshTable() {
    this._interactionService.sendMessage('refreshTable');
  }

  refreshTypes() {
    this._interactionService.sendMessageToTypes('refreshTypes');
  }

  ngOnInit() {
  }

}
