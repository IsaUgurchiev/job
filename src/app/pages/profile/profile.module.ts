import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';

import { ProfileComponent } from './profile.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from '../../block/header/header.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    CvComponent
  ],
  imports: [
    AppRoutingModule
  ]
})
export class ProfileModule { }
