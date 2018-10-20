import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreadComponent} from './thread.component';
import {Thread} from '../model/thread';
import {User} from '../model/user';

describe('ThreadComponent', () => {
  let component: ThreadComponent;
  let fixture: ComponentFixture<ThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadComponent);
    component = fixture.componentInstance;
    component.id = 1;
    component.user = 'mr:cooper';
    component.postType = 'POST_LINK';
    component.content = 'www.google.com';
    component.threadTitle = 'Expected String';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Thread title should containt value: Expected String ', () => {

    expect(component.threadTitle).toEqual('Expected String');
  });

  it('Thread should containt a user with value: mr:cooper', () => {
    expect(component.user).toEqual('mr:cooper');
  });

  it('Thread id should containt a number: 1 ', () => {
    expect(component.id).toEqual(1);
  });

  it('Thread postType should containt a value: POST_LINK ', () => {
    expect(component.postType).toEqual('POST_LINK');
  });
});
