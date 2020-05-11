import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Specialist } from 'src/app/homepage/team/specialist'
import { TeamService } from 'src/app/homepage/team/team.service'
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { TeamDialogComponent } from 'src/app/homepage/team/team-dialog/team-dialog.component';
import { TeamDialogUpdateComponent } from 'src/app/homepage/team/team-dialog-update/team-dialog-update.component';
import { TeamInteractionService } from 'src/app/homepage/team/team-interaction.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  providers: [TeamService],
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  dataSource;

  constructor(private teamService: TeamService, private teamInteractionService: TeamInteractionService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['iD', 'name', 'lastname', 'study', 'country', 'actions'];

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.teamInteractionService.teamMessage$
      .subscribe(
        message => {
          if (message === 'refreshTeamTable') {
            this.getTeam();
          }
        }
      );
    this.getTeam();
  }

  private getTeam() {
    this.teamService.getTeam()
      .subscribe(response => {
        this.dataSource = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  deleteRecord(row) {
    this.teamService.deleteSpecialist(row).subscribe();
    this.getTeam();
  }

  openDialog() {
    this.dialog.open(TeamDialogComponent);
  }

  startEdit(row) {
    this.dialog.open(TeamDialogUpdateComponent, { data: { iD: row.iD, name: row.name, lastName: row.lastName, study: row.study, country: row.country } });
  }


}
