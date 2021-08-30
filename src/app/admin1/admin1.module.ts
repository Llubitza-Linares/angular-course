import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminc/admin/admin.component';
import { Admin1Component } from '../pages/admin/admin1/admin1.component';
import { Admin2Component } from '../pages/admin/admin2/admin2.component';
import { Subadmin1Component } from './subadmin1/subadmin1.component';

const routes: Routes = [
  {path: '', redirectTo: 'adm1n', pathMatch: 'full'},
  {path: 'adm1n', component: AdminComponent,
  children: [
    {
      path: 'adm1n1', component: Admin1Component
    },
    {
      path: 'adm1n2', component: Admin2Component
    }
  ]
  },
  {
    path:'subadm1n', component: Subadmin1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    Subadmin1Component,
    Admin1Component,
    Admin2Component
  ]
})
export class Adm1nModule { } 