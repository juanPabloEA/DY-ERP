import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  menuSelect: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('orders')) {
      this.menuSelect = 'Pedidos';
    }
    if(this.router.url.includes('products')) {
      this.menuSelect = 'Products';
    }
  }

}
