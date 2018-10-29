import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Thread} from '../model/thread';
import {Group} from '../model/group';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  // DUMMY DATA REMOVE WHEN SERVICES ARE APPLIED
  private group = new Group(1, 'funny', 1, 'funny pictures');
  private user = new User('Robin', 'testing123');
  private thread = new Thread(1, 'Let me just break this board', '', 'www.google.se', this.user, this.user,
    '2018-10-24', '2018-10-24', this.group, 2);


  constructor() {
  }

// Title, username, associated group, upboats, comments
  // funktion för själva länken, en för själva thread content. funktion för username i thread

  public associatedLink() {

    return this.thread.link;

  }

  public threadsTitle() {
    return this.thread.title;
  }

  public getUser() {
    return this.thread.updateBy.email;
  }

  public getGroup() {
    return this.thread.group.group_name;
  }

  ngOnInit() {
  }

}
