import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InteractionService {

    private _typesListMessageSource = new Subject<string>();
    typesListMessage$ = this._typesListMessageSource.asObservable();

    private _refreshTypesMessageSource = new Subject<string>();
    refreshTypesMessage$ = this._refreshTypesMessageSource.asObservable();

    private _filterTypesMessageSource = new Subject<string>();
    filterTypesMessage$ = this._filterTypesMessageSource.asObservable();

    private _filterStudiesMessageSource = new Subject<string>();
    filterStudiesMessage$ = this._filterStudiesMessageSource.asObservable();

    private _filterCountriesMessageSource = new Subject<string>();
    filterCountriesMessage$ = this._filterCountriesMessageSource.asObservable();

    private _filterSitesMessageSource = new Subject<string>();
    filterSitesMessage$ = this._filterSitesMessageSource.asObservable();

    constructor() { }

    sendMessage(message: string) {
        this._typesListMessageSource.next(message);
    }

    sendMessageToTypes(message: string) {
        this._refreshTypesMessageSource.next(message);
    }

    sendMessageToTableTypes(message: string) {
        this._filterTypesMessageSource.next(message);
    }

    sendMessageToTableStudies(message: string) {
        this._filterStudiesMessageSource.next(message);
    }

    sendMessageToTableCountries(message: string) {
        this._filterCountriesMessageSource.next(message);
    }

    sendMessageToTableSites(message: string) {
        this._filterSitesMessageSource.next(message);
    }
}
