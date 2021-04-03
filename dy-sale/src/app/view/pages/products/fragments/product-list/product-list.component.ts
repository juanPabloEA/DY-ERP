import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as moment from 'moment';
import { IProduct } from '../../model/IProduct';
import { MatDialog } from '@angular/material/dialog';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  public dataSource;
  public displayedColumns;

  constructor(public dialog: MatDialog) { 
    this.dataSource = PRODUCT_LIST_TST;
    this.displayedColumns =  ['name', 'cost', 'info'];
  }

  ngOnInit(): void {
  }

  editProduct(product: IProduct) {
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '250px',
      data: {type: 'edit', product: product}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      console.log('The dialog was closed');
    });
  }
}

const PRODUCT_LIST_TST: IProduct[] = [
  {
    id: 1,
    name: 'Maria',
    cost: 4000 // March 11th 2021, 10:56:03 pm,
  },
  {
    id: 2,
    name: 'Maria',
    cost: 5000 // March 11th 2021, 10:56:03 pm,
  },
  {
    id: 3,
    name: 'Maria',
    cost: 13000 // March 11th 2021, 10:56:03 pm,
  }
];
