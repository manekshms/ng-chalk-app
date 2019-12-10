import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgChalkModule } from 'ng-chalk';
import { AppComponent } from './app.component';
import { FooTemplate } from './ng-chalk-templates/foo-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChalkModule.forRoot({templates: [{name: 'foo', template: new FooTemplate()}], defaultPadding: '2px'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
