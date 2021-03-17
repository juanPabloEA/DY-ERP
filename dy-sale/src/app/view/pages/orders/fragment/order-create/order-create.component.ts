import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import * as moment from 'moment';

export interface Transaction {
  item: string;
  quantity: number;
  cost: number;
}

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
  orderForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      deliveryDate: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      description: new FormControl(''),
      message: new FormControl(''),
      products: new FormControl('', Validators.required)
    });
  }

  displayedColumns: string[] = ['item', 'quantity','cost', 'action'];
  transactions: Transaction[] = [
    {item: 'Beach ball', quantity: 3,cost: 4000},
    {item: 'Towel',  quantity: 3,cost: 5},
    {item: 'Frisbee',  quantity: 3,cost: 2},
    {item: 'Sunscreen',  quantity: 3,cost: 4},
    {item: 'Cooler',  quantity: 3,cost: 25},
    {item: 'Swim suit',  quantity: 3,cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
