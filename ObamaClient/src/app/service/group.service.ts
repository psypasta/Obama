import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../model/group';
import {Observable} from 'rxjs';
import {Thread} from '../model/thread';


const groupURL = 'http://localhost:5000/group/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }


  getGroup(groupId: string): Observable<Group> {
    return this.http.get<Group>(groupURL + '' + groupId);
  }

  getAllGroups(): Observable<Group[]> {
    console.log('inside: getAllGroups');
    return this.http.get<Group[]>(groupURL);

}
