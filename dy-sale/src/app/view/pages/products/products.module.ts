import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
