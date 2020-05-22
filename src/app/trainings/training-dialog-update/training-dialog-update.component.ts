import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrainingService } from 'src/app/training/training.service';

@Component({
  selector: 'app-training-dialog-update',
  templateUrl: './training-dialog-update.component.html',
  providers: [TrainingService],
  styleUrls: ['./training-dialog-update.component.css']
})
export class TrainingDialogUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrainingDialogUpdateComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private trainingService: TrainingService) { }

  closeDialog() {
    this.dialogRef.close(null);
  }

  updateTraining(){
    var training = this.data;
    this.trainingService.updateTraining(training).subscribe();
  this.dialogRef.close(training);
    }

  ngOnInit(): void {
  }

}
