import {Component, Input, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {Comment} from '../model/comment';
import {ThreadService} from '../service/thread.service';
import {GroupService} from '../service/group.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {}

// Title, username, associated group, upboats, comments
  // funktion för själva länken, en för själva thread content. funktion för username i thread

  ngOnInit() {
    console.log(this.comment);
  }
}
