import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  @Input('name') name: String = 'name';

  @Output('last name') lastName: String = 'last name';

  constructor() {}

  onClickTest(event: any) {
    console.log('EVENT CLICK:', event);

    this.sendData.emit({
      name: 'Llubi',
      status: 'busy'
    });
  }
}
