import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor',
  template: `
    <p>
      interceptor works!
    </p>
  `,
  styles: [
  ]
})
export class InterceptorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
