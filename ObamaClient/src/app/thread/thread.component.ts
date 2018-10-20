import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  public id: number;
  public threadTitle: String;
  public content: String;
  public postType: String;
  public user: String;

  public ThreadComponent(id: number, threadTitle: String, content: String, postType: String, user: String) {
    this.id = id;
    this.threadTitle = threadTitle;
    this.content = content;
    this.postType = postType;
    this.user = user;
  }

  constructor() {
  }


  ngOnInit() {
  }

}
