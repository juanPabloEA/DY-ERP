import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  constructor() { 
    this.dataSource = ELEMENT_DATA_OLD;
    this.displayedColumns =  ['name', 'date', 'delivery', 'info'];
  }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
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
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  },
  {
    delivery: true,
    name: 'Maria',
    date: moment().format('MM/DD/YYYY hh:mm') // March 11th 2021, 10:56:03 pm,
  }
];