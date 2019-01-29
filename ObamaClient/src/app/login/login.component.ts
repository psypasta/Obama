import {Component, EventEmitter, OnInit, Output, Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginService} from '../service/login.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedIn: boolean;
  @Output() logInEmitter = new EventEmitter<any>();
  form: FormGroup;
  usernameOrEmail;
  password;

  constructor(private fb: FormBuilder,
  public loginService: LoginService,
  public dialogRef: MatDialogRef<LoginComponent>,
  public data: DataService,
  @Inject(MAT_DIALOG_DATA) public newUser: User) {
   }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }
  close() {
    this.dialogRef.close();
  }


  loginEvent(loggedIn: boolean) {
    // this.logEvent.emit(loggedIn);
    this.data.changeMessage(loggedIn);
    console.log(loggedIn + 'Login Event');
  }
  setLoggedInTrue() {
    console.log(this.loggedIn + 'Set Logged In True');
    this.loggedIn = true;
    this.loginEvent(this.loggedIn);
    console.log(this.loggedIn);
  }
  login() {
    const loginCred: Object = {
        usernameOrEmail: this.usernameOrEmail,
        password: this.password
    };
    this.loginService.login(loginCred).subscribe(
      token => {
        console.log(token);
        localStorage.setItem('token', token.accessToken);
        console.log(localStorage.getItem('token'));
        this.dialogRef.close();
      },
      error => {
        console.log('Login failed');
      },
      () => {
        this.setLoggedInTrue();
        console.log('wtf');
      });

    // console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.logInEmitter.emit(
        {
          email: this.form.value.email,
          pw: this.form.value.password
        }
      );
    }
  }
}
