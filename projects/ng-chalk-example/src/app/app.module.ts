import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgChalkModule } from 'ng-chalk';
import { AppComponent } from './app.component';
import { fooTemplate } from './ng-chalk-templates/foo-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChalkModule.forRoot({templates: [{name: 'foo', template: fooTemplate}], defaultPadding: '2px'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
