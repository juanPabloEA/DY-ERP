import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/authentication/page404/page404.component';
import { AuthLayoutComponent } from './view/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "orders",
        loadChildren: () =>
          import("./view/pages/orders/orders.module").then((m) => m.OrdersModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./view/pages/products/products.module").then((m) => m.ProductsModule),
      }
    ],
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./core/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
