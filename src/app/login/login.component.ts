import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
    }

    login() {
        let url = 'http://localhost:8080/login';
        let result = this.http.post<Observable<boolean>>(url, {
                         userName: this.model.username,
                         password: this.model.password
                     }).subscribe(isValid => {
                         if (isValid) {
                             sessionStorage.setItem(
                               'token',
                               btoa(this.model.username + ':' + this.model.password)
                             );
                         this.router.navigate(['']);
                         } else {
                             alert("Authentication failed.")
                         }
                     });
                        }
}
