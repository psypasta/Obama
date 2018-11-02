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
    public threadservice: ThreadService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  this.getAllThreads();
  }
  getAllThreads(){
   this.threads = this.threadservice.getAllThreads();
   this.loading = false;
  }
}
