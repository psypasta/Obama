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

  selectedValue: number;
  groups: Group[];
  loading;

  constructor(public groupService: GroupService) {}

  ngOnInit() {
    this.loading = true;
    this.getGroups();
  }

  metodnamnet() {
    console.log(this.selectedValue);
  }

  getGroups() {
    this.groupService.getAllGroups().subscribe(
      groups => {
        this.groups = groups;
        console.log(this.groups);
      },
      error => {
        console.log('getAllGroups error in getGroups-Groups Component');
      },
      () => {
        this.loading = false;
        console.log(this.loading + ' hej ');
        console.log(this.groups[0].groupName);
        console.log(this.groups[0].id);
      });
  }

}
