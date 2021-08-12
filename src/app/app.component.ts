import { Component } from '@angular/core';
import {of} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  sw = true;

  color:string;

  tiktok = of([1,2,3,4,5,6]);

  constructor(){
    //PERSON A
    this.tiktok.pipe(
      map(s => s.join('-')),
      map(s => s + 'hola'),
  
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    //PERSON B
    this.tiktok.pipe(
      filter((v:any) => v[0]%2 ===1)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    //PERSON C
    this.tiktok.subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
  }

onAddVideo(){
  this.tiktok =of([6,7,8,9,10])
}



printDataRicardoComp(event:any){
  console.log('RICARDO COMP:', event);
}


printData(event){
  console.log('CHILD COMP SEND DATA: ', event);
}
  
}