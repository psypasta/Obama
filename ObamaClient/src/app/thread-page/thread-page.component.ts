import {Component, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.css']
})
export class ThreadPageComponent implements OnInit {
  id: String;
  thread;
  comments;
  loadedPost;
  loadedComments;

  constructor(
    private threadService: ThreadService,
    private commentService: CommentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log('Crashing and burning yet?');
    this.getThread();
  }

  getThread(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.threadService.getThread(id).subscribe(
      thread => {
        console.log(thread);
        this.thread = thread;
      },
      error => {
        console.log('Well this is wrong');
      },
      () => {
        this.loadedPost = true;
        this.getComments();
      });
  }
  getComments(): void {
    this.commentService.getThreadComments(this.thread.id).subscribe(
      comments => {
        console.log(comments);
        this.comments = comments;
      },
      error => {
        console.log('Comments could not be loaded');
      },
      () => {
        console.log('Comments loaded');
        this.loadedComments = true;
      });
   }
}
