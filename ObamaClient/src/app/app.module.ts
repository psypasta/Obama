import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ThreadComponent} from './thread/thread.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { GroupComponent } from './group/group.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { ThreadPageComponent } from './thread-page/thread-page.component';
import {
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialog
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from './comment/comment.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    LoginComponent,
    ThreadComponent,
    HomeComponent,
    UserProfileComponent,
    GroupComponent,
    ThreadPageComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  entryComponents: [LoginComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/' },
    DataService, MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
