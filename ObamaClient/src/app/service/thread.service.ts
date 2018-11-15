import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Thread} from '../model/thread';
import {Group} from '../model/group';
import {User} from '../model/user';
import {forEach} from '@angular/router/src/utils/collection';


const threadURL = 'http://localhost:5000/posts/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class ThreadService {

  constructor(private http: HttpClient) {
  }

  getThread(threadId: number): Observable<Thread> {
    return this.http.get<Thread>(threadURL + 'get/' + threadId);
  }

  getAllThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(threadURL + 'get/');
  }

}
