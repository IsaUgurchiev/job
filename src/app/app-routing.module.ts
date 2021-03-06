import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {CvComponent} from './pages/profile/cv/cv.component';
import {MainComponent} from './pages/main/main.component';
import {VacanciesComponent} from './pages/profile/vacancies/vacancies.component';
import {CvEditComponent} from './pages/profile/cv-edit/cv-edit.component';

const profileRoutes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'prefix'},
  {path: 'cv', component: CvComponent},
  {path: 'cv-edit', component: CvEditComponent},
  {path: 'vacancies', component: VacanciesComponent}
];


const routes: Routes = [
  {path: 'profile', component: ProfileComponent, children: profileRoutes},
  {path: '',/* component: MainComponent,*/ redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
