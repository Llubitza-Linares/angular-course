import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommsService } from '../../app/comms.service';


@Component({
  selector: 'formus',
  templateUrl: './formus.component.html',
  styleUrls: ['./formus.component.css']
})
export class FormComponent implements OnInit {

  @Input() mode = 'Create';


  data:any[] =[]

  from:string='';
  to:string='';
  quantity:string='';
  moneyType:string='';
  mineType:string='';
  miner:string='';

  constructor( private comm:CommsService) {

  }

  ngOnInit() {
    this.comm.info.subscribe(value => {
      this.data = value
      console.log(this.data)
  })
  this.comm.mode.subscribe(value => {
    this.mode = value
    console.log(this.mode)
})
  }
  onSubmitTemplate(f:NgForm){
    if(this.mode === "Create"){
      console.log(f.value)
      console.log(f.value.to)
    }else{

    }
  }
} 