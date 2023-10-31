import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './sharedPages/header/header.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
console.log('admin-routing');


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
