import { Component, OnInit } from '@angular/core';
import {Group} from '../model/group';
import {ThreadService} from '../service/thread.service';
import {GroupService} from '../service/group.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[];
  loading: Boolean;

  constructor(public groupService: GroupService) {}

  ngOnInit() {
    this.loading = true;
    this.getGroups();
    console.log('hejpådigmax');
  }

  getGroups() {
    this.groupService.getAllGroups().subscribe(
      groups => {
        console.log(groups);
        this.groups = groups;
      },
      error => {
        console.log('getAllGroups error in getGroups-Groups Component');
      },
      () => {
        this.loading = false;
      });
  }

}
