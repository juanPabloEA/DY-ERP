import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  public columnsToDisplay;
  public expandedElement: PeriodicElement | null;

  constructor() { 
    this.dataSource = ELEMENT_DATA;
    this.columnsToDisplay = ['name', 'date', 'delivery'];
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  date: Date;
  delivery: boolean

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    delivery: true,
    name: 'Maria',
    date: new Date(),
  },
  {
    delivery: true,
    name: 'Maria',
    date: new Date(),
  },
  {
    delivery: true,
    name: 'Maria',
    date: new Date(),
  },
  {
    delivery: true,
    name: 'Maria',
    date: new Date(),
  },
  {
    delivery: true,
    name: 'Maria',
    date: new Date(),
  }
];