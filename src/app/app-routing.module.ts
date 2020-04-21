import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {CvComponent} from './pages/profile/cv/cv.component';
import {MainComponent} from './pages/main/main.component';

const profileRoutes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'prefix'},
  {path: 'cv', component: CvComponent}
];


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'profile', component: ProfileComponent, children: profileRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
