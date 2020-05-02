import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from '../../block/header/header.component';
import { NavigationComponent } from '../../block/navigation/navigation.component';
import { CvComponent } from './cv/cv.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { UserComponent } from '../../block/user/user.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CvComponent,
    HeaderComponent,
    NavigationComponent,
    VacanciesComponent,
    UserComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
