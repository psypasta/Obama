import {Component, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.css']
})
export class ThreadPageComponent implements OnInit {
  id: number;
  thread;
  finishedLoading;

  constructor(
    private threadService: ThreadService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log('Crashing and burning yet?');
    this.getThread();
  }

  getThread(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.thread = this.threadService.getThread(id);
    this.threadService.getThread(id).subscribe(
      thread => {
        console.log(thread);
        this.thread = thread;
      },
      error => {
        console.log('Well this is wrong');
      },
      () => {
        this.finishedLoading = true;
      });
  }
}
