import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home1Component } from '../../pages/home/home1/home1.component';
import { Home2Component } from '../../pages/home/home2/home2.component';
import { SubhomeComponent } from '../subhome/subhome.component';

const routes: Routes = [
  {path: '', redirectTo: 'h0me', pathMatch: 'full'},
  {path: 'h0me', component: HomeComponent,
  children: [
    {
      path: 'h0me1', component: Home1Component
    },
    {
      path: 'h0me2', component: Home2Component
    }
  ]
  },
  {
    path:'subh0me', component: SubhomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    Home1Component,
    Home2Component,
    SubhomeComponent
  ]
})
export class H0meModule { }