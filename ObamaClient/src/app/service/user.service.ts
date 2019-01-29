import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Thread} from '../model/thread';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

const userURL = 'http://localhost:5000/users/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(userURL + '' + userId);
  }
}
