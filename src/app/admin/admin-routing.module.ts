import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('../admin/auth/auth.module').then(mod => mod.AuthModule) },

  {
    path: 'layout', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('../admin/master/master.module').then(mod => mod.MasterModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
