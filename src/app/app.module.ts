import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from '../components/form/formus.component';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { VacunasPipe } from './vacunas.pipe';

@NgModule({
  declarations: [
    AppComponent,PersonComponent, VacunasPipe, FormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }