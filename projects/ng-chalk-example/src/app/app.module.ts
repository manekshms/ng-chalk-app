import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgChalkModule } from 'ng-chalk';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChalkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
