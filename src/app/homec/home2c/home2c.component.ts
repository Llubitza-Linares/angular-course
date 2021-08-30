import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2c',
  template:`<p>h0me2 works!<p> <router-outlet></router-outlet>`,
  styleUrls: ['./home2c.component.css']
})
export class Home2cComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}