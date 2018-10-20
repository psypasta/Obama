import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ThreadComponent} from './thread/thread.component';
import {HomeComponent} from './home/home.component';
import {CommunityComponent} from './community/community.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { GroupComponent } from './group/group.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    LoginComponent,
    ThreadComponent,
    HomeComponent,
    CommunityComponent,
    UserProfileComponent,
    GroupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
