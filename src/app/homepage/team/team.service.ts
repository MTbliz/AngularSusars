import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {Specialist} from 'src/app/homepage/team/specialist'
import {Study} from 'src/app/list-filters-studies/study';
import {Country} from 'src/app/list-filters-countries/country';


@Injectable()
export class TeamService {

postData = {
test: 'my content',
};

constructor(private http: HttpClient){ }

teamUrl = '/Team';

getTeam(): Observable <Specialist[]> {
return this.http.get<Specialist[]>(this.teamUrl);
}


studiesUrl = '/Studies';
countriesUrl = 'Countries';

postURL ='http://localhost:8080/Types/test';

getStudies(): Observable <Study[]> {
return this.http.get<Study[]>(this.studiesUrl);
}

getCountries(): Observable <Country[]> {
return this.http.get<Country[]>(this.countriesUrl);
}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

deleteSpecialist(id: Number): Observable<{}>{
const url = `${'http://localhost:8080/Team'}/${id}`;
return this.http.delete(url, this.httpOptions);
}

updateSpecialist(specialist: Specialist): Observable<{}>{
const url = `${'http://localhost:8080/Team'}/${specialist.iD}`;
return this.http.put(url,specialist, this.httpOptions);
}


}








