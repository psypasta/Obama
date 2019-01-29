import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userURL = 'http://localhost:5000/token';
  constructor( private http: HttpClient) { }

  login(loginCred: object): Observable<any> {
    return this.http.post<object>(this.userURL, loginCred, httpOptions).pipe();
  }
}
