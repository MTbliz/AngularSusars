import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Specialist } from 'src/app/homepage/team/specialist'
import { TeamService } from 'src/app/homepage/team/team.service'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TeamInteractionService } from 'src/app/homepage/team/team-interaction.service';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {

  teamModel = new Specialist(null, '', '', '', '');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(public dialogRef: MatDialogRef<TeamDialogComponent>, private teamInteractionService: TeamInteractionService, private http: HttpClient) { }

  closeDialog() {
    this.dialogRef.close('CreatePanel');
  }

  createSpecialist() {
    this.http.post('http://localhost:8080/Team2', this.teamModel, this.httpOptions)
      .subscribe();
    this.dialogRef.close('CreatePanel');
    this.refreshTeamTable();

  }

  refreshTeamTable() {
    this.teamInteractionService.sendMessageToTeamTable('refreshTeamTable');
  }

  ngOnInit() {
  }

}
