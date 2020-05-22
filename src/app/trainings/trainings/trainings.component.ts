import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { TrainingDialogUpdateComponent } from '../training-dialog-update/training-dialog-update.component';
import { Training } from 'src/app/training/training';
import { TrainingService } from 'src/app/training/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  providers: [TrainingService],
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  @ViewChild('trainingForm', { static: false }) sponsorForm: NgForm;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sortTrainings: MatSort;
  @ViewChild('paginator2', { static: false }) paginator2: MatPaginator;

  displayedColumns: string[] = ['name', 'version', 'effectiveDate', 'stopDate', 'actions'];
  trainings: Training[] = [];
  dataSource = new MatTableDataSource(this.trainings);

  displayedColumnsTraining: string[] = ['name', 'version', 'effectiveDate', 'stopDate', 'actions'];
  dataSourceTraining = new MatTableDataSource(this.trainings);

  constructor(private trainingService: TrainingService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTrainings();
  }

  applyFilter(filterValue: string) {
    this.dataSourceTraining.filter = filterValue.trim().toLowerCase();
  }

  addFileToTable(files: File[]) {
    for (var i = 0; i < files.length; i++) {
      let dotIndex = files[i].name.lastIndexOf(".");
      let fileName = files[i].name.slice(0, dotIndex);
      var training = new Training(i, fileName, null, null, null, files[i]);
      this.trainings.push(training);
    }
  }

  onFileSelected(event) {
    var files: File[] = null;
    files = <File[]>event.target.files
    this.addFileToTable(files);
    this.dataSource = new MatTableDataSource(this.trainings);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onUpload() {
    this.trainingService.onUpload(this.trainings).subscribe(responseData => {
      this.trainings = responseData;
      for (var i = 0; i < this.trainings.length; i++) {
        this.dataSourceTraining.data.push(this.trainings[i])
      }
      this.trainings = [];
      this.dataSource = new MatTableDataSource(this.trainings);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSourceTraining = new MatTableDataSource(this.dataSourceTraining.data);
      this.dataSourceTraining.paginator = this.paginator2;
    });
  }

  downloadTraining(row) {
    this.trainingService.downloadTraining(row.fileDb.id).subscribe(res => {
      var contentDisposition = res.headers.get('content-disposition');
      var fileName = contentDisposition.split('attachment; filename=')[1].replace(/"/g, '').trim();
      var data = res.body;
      var blob = new Blob([data], { type: 'application/octet-stream' });
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = fileName;
      link.click();
    });
  }

  getTrainings() {
    this.trainingService.getTrainings()
      .subscribe(response => {
        this.dataSourceTraining = new MatTableDataSource(response);
        this.dataSourceTraining.sort = this.sortTrainings;
        this.dataSourceTraining.paginator = this.paginator2;
      });
  }

  deleteRecord(row, index) {
    this.trainingService.deleteTraining(row.id).subscribe();
    this.dataSourceTraining.data.splice(index, 1);
    this.dataSourceTraining = new MatTableDataSource(this.dataSourceTraining.data);
    this.dataSourceTraining.sort = this.sortTrainings;
    this.dataSourceTraining.paginator = this.paginator2;
  }

  startEdit(row, index) {
    let dialogRef = this.dialog.open(TrainingDialogUpdateComponent
      , { data: { id: row.id, name: row.name, version: row.version, effectiveDate: row.effectiveDate, stopDate: row.stopDate, fileDb: row.fileDb } });
    dialogRef.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      } else {
        this.dataSourceTraining.data[index] = result;
        this.dataSourceTraining = new MatTableDataSource(this.dataSourceTraining.data);
        this.dataSourceTraining.sort = this.sort;
        this.dataSourceTraining.paginator = this.paginator2;
      }
    });
  }

}
