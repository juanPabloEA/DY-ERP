import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from './orders/orders.module';
import { StoreModule } from '@ngrx/store';
import { LoginModule } from './login/login.module';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    OrdersModule,
    LoginModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  exports: [
    OrdersModule,
    LoginModule
  ]
})
export class ReduxModule { }
