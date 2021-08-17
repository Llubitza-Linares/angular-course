import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfLlubitza]'
})
export class Directive2Directive implements OnChanges {

  @Input() ngIfLlubitza:boolean = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { 

  }

  ngOnChanges(changes:any){
    console.log('changes: ', changes.ngIfLlubitza.currentValue)
    this.setViewContainer(changes.ngIfLlubitza.currentValue);
    
  }

  setViewContainer(show:boolean){
    if(show){
      this.test.emit('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    } 
  }


}