import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';

import { ProfileComponent } from './profile.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from '../../block/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    CvComponent
  ],
  imports: [
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class ProfileModule { }
