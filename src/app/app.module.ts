import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '@web/app-routing.module';
import { AppComponent } from '@web/app.component';
import { ComponentsModule } from '@web/components/components.module';
import { PagesModule } from '@web/pages/pages.module';
import {
  IApplicationState,
  initialValue,
  reducers,
} from '@web/store/application-state';
import { metaReducer } from '@web/store/state';

export function initialState(): IApplicationState {
  return Object.assign({}, initialValue);
}

export const metaReducers = [metaReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      initialState,
      metaReducers,
    }),
    ComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
