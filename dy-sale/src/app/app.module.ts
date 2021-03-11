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
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { OrdersRoutingModule } from './view/pages/orders/orders-routing.module';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialUiModule,
    OrdersRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
