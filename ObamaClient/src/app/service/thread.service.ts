import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Thread} from '../model/thread';
import {Group} from '../model/group';
import {User} from '../model/user';


const threadURL = 'http://localhost:5000/threads/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class ThreadService {
  private user = new User('Robin', 'testing123');
     private group = new Group(1, 'funny', 1, 'funny pictures');
   private thread = new Thread(1, 'Let me just break this board', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
     ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
     'Duis aute irure dolor in ' +
     'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
     'Excepteur sint occaecat cupidatat non proident, sunt in ' +
     'culpa qui officia deserunt mollit anim id est laborum.', 'www.google.se', this.user, this.user,
    '2018-10-24', '2018-10-24', this.group, 2);
   constructor() {
  }

   getThread(threadId: number): Thread {
    // return this.http.get<Thread>(threadURL + 'get/' + threadId);
    return this.thread;
  }

}
