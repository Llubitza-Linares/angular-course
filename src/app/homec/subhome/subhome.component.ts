import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subhome',
  template:`<p>subh0me works!<p> <router-outlet></router-outlet>`,
  styleUrls: ['./subhome.component.css']
})
export class SubhomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}