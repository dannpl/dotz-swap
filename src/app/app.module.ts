import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '@web/app-routing.module';
import { AppComponent } from '@web/app.component';
import { ComponentsModule } from '@web/components/components.module';
import { PagesModule } from '@web/pages/pages.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {}), ComponentsModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
