import {Component, Input, OnInit} from '@angular/core';
import {ThreadService} from '../service/thread.service';
import {GroupService} from '../service/group.service';
import {Thread} from '../model/thread';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../model/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group;
  loadedPost;

  constructor(
    private threadService: ThreadService,
    private groupService: GroupService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.getGroup();
  }

  getGroup(): void {
    console.log(this.route.snapshot.paramMap.get('id').toString());
    const id = this.route.snapshot.paramMap.get('id').toString();
    console.log('I love my ' + id);
    this.groupService.getGroup(id.toString()).subscribe(
      group => {
        console.log(group);
        this.group = group;
      },
      error => {
        console.log('Well this is Gwrong');
      },
      () => {
        this.loadedPost = true;
      });
  }
  

}
