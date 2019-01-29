import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from '../model/user';

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);
//  fixture.detectChanges();

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  }); //  .compileComponents();


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors;
    const email = component.form.controls['email'];
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Entering email and password emits logInEmitter event', () => {
    let user: User;

    component.logInEmitter.subscribe((value) => user = value);

    expect(user.email).toBe('test@example.com');
  });
});
