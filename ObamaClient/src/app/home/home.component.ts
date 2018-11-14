import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {Thread} from '../model/thread';
import {ThreadService} from '../service/thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  threads: Thread[];
  loading;
  constructor(
    public threadService: ThreadService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  this.getAllThreads();
  }
  getAllThreads() {
    this.threadService.getAllThreads().subscribe(
      threads => {
        console.log(threads);
        this.threads = threads;
      },
      error => {
        console.log('Well this is wrong');
      },
      () => {
        this.loading = false;
      });
    this.loading = false;
  }
}
