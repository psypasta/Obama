import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Thread} from '../model/thread';
import {Group} from '../model/group';
import {ThreadService} from '../service/thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() thread: Thread;
  constructor(
    private threadService: ThreadService,
  ) {
  }

// Title, username, associated group, upboats, comments
  // funktion för själva länken, en för själva thread content. funktion för username i thread

  public associatedLink() {

    return this.threadService.getAllThreads();

  }

  ngOnInit() {
  }

}
