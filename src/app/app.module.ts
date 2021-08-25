import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JuradoModule } from './jurado/jurado.module';

import { VotacionModule } from './votacion/votacion.module';

@NgModule({
  imports: [BrowserModule, FormsModule, VotacionModule, JuradoModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
