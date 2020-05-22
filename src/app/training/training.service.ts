import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Training } from './training';



@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  APP_TRAINING_URL_UPLOAD = 'http://localhost:8080/uploadMultipleTrainings';
  APP_TRAINING_URL_GET = 'http://localhost:8080/training';

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:4200' })
  };

  constructor(private http: HttpClient) { }

  onUpload(trainings: Training[]): Observable<Training[]> {
    const fd = new FormData();
    for (var i = 0; i < trainings.length; i++) {
      fd.append('files', trainings[i].file);
      fd.append('names', trainings[i].name);
      fd.append('versions', trainings[i].version + "");
      fd.append('effectiveDates', trainings[i].effectiveDate.toISOString());
      if (trainings[i].stopDate != null) {
        fd.append('stopDates', trainings[i].stopDate.toISOString());
      } else {
        fd.append('stopDates', '');
      }
    }
    return this.http.post<Training[]>(this.APP_TRAINING_URL_UPLOAD, fd);
  }

  downloadTraining(id: number): Observable<HttpResponse<Blob>> {
    const url = `${'http://localhost:8080/downloadFile'}/${id}`;
    return this.http.get<Blob>(url, { observe: 'response', responseType: 'blob' as 'json' });
  }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.APP_TRAINING_URL_GET, this.httpOptions);
  }

  deleteTraining(id: Number): Observable<{}> {
    const url = `${'http://localhost:8080/training'}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  updateTraining(training: Training): Observable<{}> {
    const url = `${'http://localhost:8080/training'}/${training.id}`;
    return this.http.put(url, training, this.httpOptions);
  }
}
