import {Component, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';
import {UserService} from '../service/user.service';
import {Role} from '../model/role';
import {MatRadioChange} from '@angular/material';
import {log} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  radioValue = 0;
  loading = true;
  userId = 1;
  user;
  newPost;
  threadId;

  constructor(
    public threadService: ThreadService,
    public userService: UserService,
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.makeThreadTemplate();
    this.getUser();
  }

  makeThreadTemplate() {
    const newPost = {
      postTitle: '',
      content: '',
      postType: true,
      userId: 0,
      groupId: 1,
    };
    console.log(newPost);
    this.newPost = newPost;
  }

  onRadioChange1(event: MatRadioChange) {
    console.log(this.radioValue);
    if (this.radioValue == 1) {
      console.log("Now I am in command");
      // @ts-ignore
      this.newPost.postType = 'LINK_POST';
    }
    if (this.radioValue == 2) {
      console.log("Can I be code too daddy");
      // @ts-ignore
      this.newPost.postType = 'TEXT_POST';
    }
    console.log(this.newPost.postType);
  }



  getUser() {
    this.userService.getUser(this.userId).subscribe(
      user => {
        console.log(user);
        this.newPost.userId = user.id;
        this.user = user;
      },
      error => {
        console.log('Well this is wrong');
      },
      () => {
        // @ts-ignore;
        console.log(this.newPost);
        this.loading = false;
      });
  }
  create() {
    if (this.radioValue == 1) {
      // @ts-ignore
      this.newPost.postType = true;
    } else {
      // @ts-ignore
      this.newPost.postType = false;
    }
    console.log(this.newPost);

   this.threadService.createThread(this.newPost).subscribe(
    observable => {
      console.log(observable.message);
      this.threadId = observable.message;
    },
     error => {
      console.log('Create thread failed');
     },
     () => {
      console.log('Thread completed');
       this.router.navigate(['thread/' + this.threadId]);
     });
  }
  cancel() {
    this.router.navigate(['']);
  }


}
