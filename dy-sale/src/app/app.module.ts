import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './view/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './view/shared/material-ui/material-ui.module';
import { SiginComponent } from './core/authentication/sigin/sigin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './view/pages/orders/orders-routing.module';
import { UtilModule } from './core/util/util.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { ReduxModule } from './core/redux/redux.module';
import { ServiceModule } from './core/service/service.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    SiginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialUiModule,
    OrdersRoutingModule,
    UtilModule,
    ReduxModule,
    ServiceModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
