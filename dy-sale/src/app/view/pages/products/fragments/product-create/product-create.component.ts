import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/view/pages/products/model/IProduct';
import { IProductDialogData } from '../../model/IProductDialogData';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductDialogData
  ) { 
    switch (data.type) {
      case 'edit': {
        this.buildEditForm(data.product);
        break;
      }

      case 'create': {
        this.buildCreateForm();
        break;
      }
    }
  }
  buildEditForm(product: IProduct): void {
    this.productForm = new FormGroup({
      id: new FormControl(product.id), 
      name: new FormControl(product.name, Validators.required),
      cost: new FormControl(product.cost, Validators.required)
    });
  }
  buildCreateForm(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''), 
      name: new FormControl('', Validators.required),
      cost: new FormControl(0, Validators.required)
    });
  }
  ngOnInit(): void {
  }

}
