import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from '../../block/header/header.component';
import { NavigationComponent } from '../../block/navigation/navigation.component';

import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
    CvComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
