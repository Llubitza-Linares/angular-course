import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminc/admin/admin.component';
import { Admin1cComponent } from './adminc/admin1c/admin1c.component';
import { Admin2cComponent } from './adminc/admin2c/admin2c.component';
import { AppComponent } from './app.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { HomeComponent } from './homec/home/home.component';
import { Home1cComponent } from './homec/home1c/home1c.component';
import { Home2cComponent } from './homec/home2c/home2c.component';
import { AdminModule } from './pages/admin/admin.module';
import { Admin1Component } from './pages/admin/admin1/admin1.component';
import { Admin2Component } from './pages/admin/admin2/admin2.component';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { SharedModule } from './shared/shared.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

import { View1Component } from './view1/view1.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'view1', pathMatch: 'full'
  },
  {
    path: 'view1', component: View1Component,
    children: [
      {
        path: '', redirectTo: 'view1sub1', pathMatch: 'full'
      },
      {
        path: 'view1sub1', component: View1sub1Component,
      },
      {
        path: 'view1sub2', component: View1sub2Component,
      }
    ]
  },
  {
    path: 'view2/:id/sub/:id2', component: View2Component
  },
  {
    path: 'view3', loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'home1', pathMatch: 'full'
      },
      {
        path: 'home1', component: Home1Component,
      },
      {
        path: 'home2', component: Home2Component,
      }
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'admin1', pathMatch: 'full'
      },
      {
        path: 'admin1', component: Admin1Component,
      },
      {
        path: 'admin2', component: Admin2Component,
      }
    ]
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component,HomeComponent,
    Home1cComponent,
    Home2cComponent, AdminComponent,
    Admin1cComponent,
    Admin2cComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }