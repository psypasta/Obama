import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    public dialog: MatDialog, public data: DataService
  ) {
  }

  ngOnInit() {
  }

  loginPage() {
    this.data.currentMessage.subscribe(message => this.loggedIn = message);
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(newUser => {
      console.log('hej');
    });
  }

  profileButton() {
  }

}
