import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginCred: object): Observable<any> {
    console.log(loginCred);
    return this.http.post<object>('http://localhost:5000/token', loginCred, httpOptions).pipe();
  }
}
