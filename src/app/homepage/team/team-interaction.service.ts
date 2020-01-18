import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class TeamInteractionService {

private _teamMessageSource = new Subject<string>();
teamMessage$ = this._teamMessageSource.asObservable();

constructor() {}

sendMessageToTeamTable(message: string){
this._teamMessageSource.next(message);
}

}
