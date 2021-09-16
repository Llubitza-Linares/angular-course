import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoolYtoNPipe } from './bool-yto-n.pipe';
import { PersonComponent } from './person/person.component';
import { VacunasPipe } from './vacunas.pipe';

@NgModule({
  declarations: [
    AppComponent,PersonComponent, VacunasPipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }