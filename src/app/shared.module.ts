import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  exports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SharedModule { }
