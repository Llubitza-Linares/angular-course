import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { Core1Component } from './core1/core1.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [
    Core1Component
  ],
  exports:[
    Core1Component
  ]
})
export class CoreModule { }