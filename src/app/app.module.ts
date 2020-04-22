import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileModule } from './pages/profile/profile.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import {SharedModule} from './shared.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
