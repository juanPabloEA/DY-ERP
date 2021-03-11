import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './component/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './fragment/order-list/order-list.component';
import { OrderCreateComponent } from './fragment/order-create/order-create.component';
import { OrderViewComponent } from './fragment/order-view/order-view.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';



@NgModule({
  declarations: [OrdersComponent, OrderListComponent, OrderCreateComponent, OrderViewComponent],
  imports: [
    OrdersRoutingModule,
    CommonModule,
    MaterialUiModule
  ]
})
export class OrdersModule { }
