import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  constructor() {}

  printDataRicardoComp(event: any) {
    console.log('Test1Component:', event);
  }
}
