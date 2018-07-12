import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoilerplateCoreModule } from 'boilerplate-core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layouts.module';
import { PageModule } from './modules/core/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoilerplateCoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
