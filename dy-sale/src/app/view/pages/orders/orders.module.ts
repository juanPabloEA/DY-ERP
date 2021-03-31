import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './component/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './fragments/order-list/order-list.component';
import { OrderCreateComponent } from './fragments/order-create/order-create.component';
import { OrderViewComponent } from './fragments/order-view/order-view.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilModule } from 'src/app/core/util/util.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [OrdersComponent, OrderListComponent, OrderCreateComponent, OrderViewComponent],
  imports: [
    OrdersRoutingModule,
    CommonModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ]
})
export class OrdersModule { }
