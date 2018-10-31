import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ThreadPageComponent} from './thread-page/thread-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'content', component: ThreadPageComponent},
  {path: 'userpage', component: UserProfileComponent},
  {path: 'thread/:id', component: ThreadPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
