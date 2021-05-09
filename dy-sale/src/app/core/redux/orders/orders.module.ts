import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './orders.reducer';
import * as constant from './orders.constants';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(constant.ORDERS, ordersReducer)
  ]
})
export class OrdersModule { }
