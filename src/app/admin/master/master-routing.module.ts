import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouutUsComponent } from './abouut-us/abouut-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AbouutUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
