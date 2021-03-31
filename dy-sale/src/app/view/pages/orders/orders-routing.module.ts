import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './component/orders.component';
import { OrderCreateComponent } from './fragments/order-create/order-create.component';
import { OrderListComponent } from './fragments/order-list/order-list.component';
import { OrderViewComponent } from './fragments/order-view/order-view.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      { 
        path: 'view/:id',
        component: OrderViewComponent },
      {
        path: 'list',
        component: OrderListComponent,
      },
      {
        path: 'create',
        component: OrderCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
