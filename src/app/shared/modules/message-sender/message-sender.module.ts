import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MessageSenderComponent} from "./message-sender.component";
import {SharedMaterialModule} from "../../shared-material.module";
import { FormsModule } from '@angular/forms';
import { PublicationService } from '../../../pages/shared/services/publication.service';
import { PostMessageComponent } from './components/post-message/post-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule
  ],
  declarations: [
    PostMessageComponent,
    MessageSenderComponent
  ],
  exports: [
    PostMessageComponent,
    MessageSenderComponent
  ],
  providers: [
    PublicationService
  ]
})

export class MessageSenderModule {
}