import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from '../../block/header/header.component';

import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    CvComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
