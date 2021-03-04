import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainMenuLayoutComponent } from './main-menu-layout/main-menu-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    MainMenuLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
