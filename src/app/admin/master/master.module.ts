import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { AbouutUsComponent } from './abouut-us/abouut-us.component';
import { HomeComponent } from './home/home.component';
console.log('masters-routing');


@NgModule({
  declarations: [
    AbouutUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
