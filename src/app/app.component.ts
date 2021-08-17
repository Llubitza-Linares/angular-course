import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

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
  personASub:Subscription;
  video = 1;
  tictock = new BehaviorSubject(this.video);

  @ViewChild('myDiv1')myDiv1:ElementRef;

  @ViewChild('myDiv1')myDiv2:ElementRef;

  @ViewChild('myCompLlubitza') myCompLlubitza: any;

  @ViewChild("myDiv3") myDiv3 = ElementRef;

  constructor(){

    // PERSON A
    this.personASub = this.tictock.pipe(
      filter(s => s%2 === 0)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      delay(4000)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });
  }
  onAddVideo(){
    this.video ++
    this.tictock.next(this.video);    
  }

  person1Unsubscribe(){
     this.personASub.unsubscribe();
     console.log('PERSON A SE DESUSCRIBE')
  }

printDataRicardoComp(event:any){
  console.log('RICARDO COMP:', event);
}


printData(event){
  console.log('CHILD COMP SEND DATA: ', event);
}
  

test(event){
  console.log('AAA<zx<zAAAAAAAAAAAAAAAAAAAAAAAAA', event);
}

test100(event){
  console.log('234234234234234', event);
}

onShowLocalVars(){
  console.log(this.myDiv1, this.myDiv2, this.myCompLlubitza);

  this.myCompLlubitza.onClickTest();

  this.myDiv1.nativeElement.style.backgroundColor ='green';
console.log(this.myDiv1, this.myDiv2, this.myCompLlubitza);


  this.myDiv2.nativeElement.value = 'llubitza';
}
}
