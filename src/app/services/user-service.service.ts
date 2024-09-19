import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentication } from '../authentication/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  authenticate(
    email: String,
    password: string
): Observable<Authentication>{
    console.log(email, password);
    let body={
        email: email,
        password: password,
    };
    let headers = new HttpHeaders({
        'content-type': 'application/json',
    });
    return this.http.post<Authentication>(
        'http://localhost:8080/user/login',
        body,
        {
            headers: headers,
        }
    );
}
}
