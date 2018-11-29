import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../model/group';
import {Observable} from 'rxjs';


const threadURL = 'http://localhost:5000/group';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private group;

  constructor(private http: HttpClient) { }

  getGroup(groupId: number): Object {
    return this.http.get<Group>(threadURL + groupId);
  }
}
