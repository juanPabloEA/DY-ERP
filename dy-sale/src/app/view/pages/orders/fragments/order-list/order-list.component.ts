import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/core/redux/orders/orders.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderListComponent implements OnInit {
  public dataSource;
  public displayedColumns;
  public expandedElement: PeriodicElementOLD | null;
  count$: Observable<number>;
  status$: Observable<number>;
  constructor(private store: Store<{ orders: number }>) { 
    this.count$ = store.select('orders');
    this.dataSource = ELEMENT_DATA_OLD;
    this.displayedColumns =  ['name', 'date', 'delivery', 'info'];
  }

  ngOnInit(): void {
  }

   
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
export interface PeriodicElementOLD {
  name: string;
  date: string;
  delivery: boolean
}

const ELEMENT_DATA_OLD: PeriodicElementOLD[] = [
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: false,
    name: 'Juan',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Daniela',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  }
];