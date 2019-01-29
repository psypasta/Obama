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
  MatDialog,
} from '@angular/material';
import { CommentComponent } from './comment/comment.component';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

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
    CreatePostComponent,

  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  entryComponents: [LoginComponent],
  providers: [MatDialog,
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
