import { Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort,MatPaginator} from '@angular/material';
import {Susar} from 'src/app/susars/susar';
import {SusarService } from 'src/app/susars/susar.service';
import {Observable} from 'rxjs/Observable';
import{InteractionService} from 'src/app/susars/interaction.service';
import{SusarPipe} from 'src/app/susars/susarPipe';

import {MatDialog} from '@angular/material';
import {DialogUpdateComponent} from 'src/app/dialog-update/dialog-update.component';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  providers: [SusarService],
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {

dataSource;
testSusars: Susar[] = [];

studies: string[] = [];
countries: string[] = [];
sites: string[] = [];
types: string[] = [];


constructor(public dialog: MatDialog, private susarService: SusarService, private _interactionService: InteractionService, private _susarPipe: SusarPipe) {}

displayedColumns: string[] = ['iD', 'study', 'country', 'site', 'number', 'type', 'reciptDate', 'sentDate', 'aorDate','actions'];

    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    ngOnInit(){

    this._interactionService.typesListMessage$
        .subscribe(
        message => {
        if(message === 'refreshTable'){
        this.getSusars();
        }
        }
        );

    this._interactionService.filterTypesMessage$
    .subscribe(
    message => {
    if(message.length >0){
    const messageSplit = (message + '').split(",",50);
    this.types = messageSplit;
    const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
    this.dataSource = new MatTableDataSource(filteredSusars);
    this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    } else {
    this.types = [];
        const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
        this.dataSource = new MatTableDataSource(filteredSusars);
        this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
    }
    }
    );

    this._interactionService.filterStudiesMessage$
        .subscribe(
        message => {
        if(message.length >0){
        const messageSplit = (message + '').split(",",50);
        this.studies = messageSplit;
        const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
        console.log('aaa' + message);
        this.dataSource = new MatTableDataSource(filteredSusars);
        this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        } else {
        this.studies = [];
                const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
                this.dataSource = new MatTableDataSource(filteredSusars);
                this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
        }
        }
        );

     this._interactionService.filterCountriesMessage$
            .subscribe(
            message => {
            if(message.length >0){
            const messageSplit = (message + '').split(",",50);
            this.countries = messageSplit;
            const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
            this.dataSource = new MatTableDataSource(filteredSusars);
            this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            } else {
            this.countries = [];
                    const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
                    this.dataSource = new MatTableDataSource(filteredSusars);
                    this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
            }
            }
            );

     this._interactionService.filterSitesMessage$
                 .subscribe(
                 message => {
                 console.log('message' + message.length);
                 if(message.length >0){
                 const messageSplit = (message + '').split(",",50);
                 console.log('uuu' + messageSplit.length);
                 this.sites = messageSplit;
                 const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
                 this.dataSource = new MatTableDataSource(filteredSusars);
                 this.dataSource.sort = this.sort;
                     this.dataSource.paginator = this.paginator;
                 } else {
                 this.sites = [];
                         const filteredSusars: Susar[] = this._susarPipe.transformAll(this.testSusars, this.types, this.studies, this.countries, this.sites);
                         this.dataSource = new MatTableDataSource(filteredSusars);
                         this.dataSource.sort = this.sort;
                             this.dataSource.paginator = this.paginator;
                 }
                 }
                 );
this.getSusars();
      }

    private getSusars(){
    this.susarService.getSusars()
        .subscribe(response => { console.log(response);
        this.testSusars = response;

                                    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
}

startEdit(row){
console.log(row);
this.dialog.open(DialogUpdateComponent, {data: {iD:row.iD, study: row.study, country: row.country, site: row.site, number: row.number, type: row.type, reciptDate: row.reciptDate, sentDate: row.sentDate, aorDate: row.aorDate}});
}

deleteRecord(row){
console.log(row);
this.susarService.deleteSusar(row).subscribe();
this.refreshTable();
this.refreshTypes();
}

refreshTable(){
this._interactionService.sendMessage('refreshTable');
}

refreshTypes(){
this._interactionService.sendMessageToTypes('refreshTypes');
}

    }



