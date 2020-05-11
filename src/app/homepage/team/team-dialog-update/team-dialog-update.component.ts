import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Specialist } from 'src/app/homepage/team/specialist'
import { TeamService } from 'src/app/homepage/team/team.service'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TeamInteractionService } from 'src/app/homepage/team/team-interaction.service';
@Component({
  selector: 'app-team-dialog-update',
  templateUrl: './team-dialog-update.component.html',
  providers: [TeamService],
  styleUrls: ['./team-dialog-update.component.css']
})
export class TeamDialogUpdateComponent implements OnInit {

  teamModel = new Specialist(null, '', '', '', '');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(public dialogRef: MatDialogRef<TeamDialogUpdateComponent>, private teamInteractionService: TeamInteractionService,
    @Inject(MAT_DIALOG_DATA) public data: any, private teamService: TeamService, private http: HttpClient) { }

  closeDialog() {
    this.dialogRef.close('CreatePanel');
  }

  updateSpecialist() {
    this.teamService.updateSpecialist(this.data).subscribe();
    this.dialogRef.close('CreatePanel');
    this.refreshTeamTable();
  }

  refreshTeamTable() {
    this.teamInteractionService.sendMessageToTeamTable('refreshTeamTable');
  }

  ngOnInit() {
  }

}
