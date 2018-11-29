import {Component, EventEmitter, OnInit, Output, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<any>();
  form: FormGroup;
  usernameOrEmail;
  password;

  constructor(private fb: FormBuilder,
  public loginService: LoginService,
  public dialogRef: MatDialogRef<LoginComponent>,
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

  login() {
    const loginCred: Object = {
        usernameOrEmail: this.usernameOrEmail,
        password: this.password
    };
    this.loginService.login(loginCred).subscribe(
      token => {
        console.log(token);
      },
      error => {
        console.log('Login failed');
      },
      () => {
      });

    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
        {
          email: this.form.value.email,
          pw: this.form.value.password
        }
      );
    }
  }
}
