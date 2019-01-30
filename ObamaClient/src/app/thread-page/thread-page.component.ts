import {Component, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../service/comment.service';
import {UserService} from '../service/user.service';

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
  newCommentUsername: string;
  newComment;
  addingNewComment = false;

  constructor(
    private threadService: ThreadService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getCurrentUser();
    console.log('Crashing and burning yet?');
    this.getThread();
  }

  getCurrentUser() {
    this.newCommentUsername = 'Bman';
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
        this.NewCommentTemplate();
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
   NewCommentTemplate() {
     const newComment = {
       content: '',
       userId: 1,
       postId: this.thread.id,
     };
     this.newComment = newComment;
   }
   cancelComment() {
    this.addingNewComment = false;
   }
   commentAdder() {
    this.addingNewComment = true;
   }
   addComment() {
    console.log(this.newComment);
     this.commentService.createComment(this.newComment).subscribe(
       observable => {
         console.log(observable);
       },
       error => {
         console.log('Create comment failed');
       },
       () => {
         console.log('Comment completed');
         this.addingNewComment = false;
         this.getComments();
       });
   }
}
