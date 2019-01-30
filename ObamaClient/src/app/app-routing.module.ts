import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ThreadPageComponent} from './thread-page/thread-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {GroupComponent} from './group/group.component';
import {CreatePostComponent} from './create-post/create-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'content', component: ThreadPageComponent},
  {path: 'userpage/:id', component: UserProfileComponent},
  {path: 'thread/:id', component: ThreadPageComponent},
  {path: 'group/:id', component: GroupComponent},
  {path: 'createPost', component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
