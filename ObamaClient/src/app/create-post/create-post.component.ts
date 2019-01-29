import {Component, OnInit} from '@angular/core';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';
import {UserService} from '../service/user.service';
import {Role} from '../model/role';
import {MatRadioChange} from '@angular/material';
import {log} from 'util';

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
  newPost: Thread;
  textLink = 'Text';
  textOrLinks: string[] = ['Text', 'Link'];

  constructor(
    public threadService: ThreadService,
    public userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getUser();
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
        this.user = user;
      },
      error => {
        console.log('Well this is wrong');
      },
      () => {
        // @ts-ignore
        this.newPost = new Thread(0, 'LINK_POST', this.user, '', '');
        console.log(this.newPost);
        console.log(this.newPost.user.username);
        this.loading = false;
      });
  }
  create() {
    if (this.radioValue == 1) {
      // @ts-ignore
      this.newPost.postType = 'LINK_POST';
    } else {
      // @ts-ignore
      this.newPost.postType = 'TEXT_POST';
    }
    console.log(this.newPost);

   this.threadService.createThread(this.newPost).subscribe(
    observable => {
      console.log(observable);
    },
     error => {
      console.log('Create thread failed');
     },
     () => {
      console.log('Thread completed');
     });
  }


}
