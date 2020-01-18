import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {Susar} from 'src/app/susars/susar';
import {SusarPost} from 'src/app/susars/susarpost';
import {Type} from 'src/app/list-filters-type/type';
import {Study} from 'src/app/list-filters-studies/study';
import {Country} from 'src/app/list-filters-countries/country';
import {Site} from 'src/app/list-filters-sites/site';

@Injectable()
export class SusarService {

postData = {
test: 'my content',
};

constructor(private http: HttpClient){ }

susarUrl = '/Susars';

getSusars(): Observable <Susar[]> {
return this.http.get<Susar[]>(this.susarUrl);
}

typeUrl = '/Types';
studiesUrl = '/Studies';
countriesUrl = 'Countries';
sitesUrl = 'Sites';
postURL ='http://localhost:8080/Types/test';

getTypes(): Observable <Type[]> {
return this.http.get<Type[]>(this.typeUrl);
}

getStudies(): Observable <Study[]> {
return this.http.get<Study[]>(this.studiesUrl);
}

getCountries(): Observable <Country[]> {
return this.http.get<Country[]>(this.countriesUrl);
}

getSites(): Observable <Site[]> {
return this.http.get<Site[]>(this.sitesUrl);
}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

deleteSusar(id: Number): Observable<{}>{
const url = `${'http://localhost:8080/Susars'}/${id}`;
return this.http.delete(url, this.httpOptions);
}

updateSusar(susar: Susar): Observable<{}>{
const url = `${'http://localhost:8080/Susars'}/${susar.iD}`;
return this.http.put(url,susar, this.httpOptions);
}


}








