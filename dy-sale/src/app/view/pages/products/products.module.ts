import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilModule } from 'src/app/core/util/util.module';
import { ProductListComponent } from './fragments/product-list/product-list.component';
import { ProductCreateComponent } from './fragments/product-create/product-create.component';



@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ]
})
export class ProductsModule { }
