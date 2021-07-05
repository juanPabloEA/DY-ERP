import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/authentication/guard/guard.guard';
import { Roles } from './core/authentication/guard/Roles';
import { Page404Component } from './core/authentication/page404/page404.component';
import { AuthLayoutComponent } from './view/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "orders",
        data: {
          role: [Roles.Dealer, Roles.Delivery, Roles.Admin]
        },
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./view/pages/orders/orders.module").then((m) => m.OrdersModule),
      },
      {
        path: "products",
        data: {
          role: [Roles.Admin]
        },
        canActivate: [AuthGuard],
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
