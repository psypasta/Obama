import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Thread} from '../model/thread';
import {Group} from '../model/group';
import {ThreadService} from '../service/thread.service';
import {GroupService} from '../service/group.service';
import {HttpHeaders} from '@angular/common/http';
const threadURL = 'http://localhost:5000/home';
const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() thread: Thread;

  constructor(
    private threadService: ThreadService, private groupService: GroupService
  ) {
  }

// Title, username, associated group, upboats, comments
  // funktion för själva länken, en för själva thread content. funktion för username i thread
  public associatedLink() {

    return this.threadService.getAllThreads();

  }
  public getGroup(groupId: number) {
    return this.groupService.getGroup(groupId);
  }

  ngOnInit() {
    console.log(this.thread);
  }

}
