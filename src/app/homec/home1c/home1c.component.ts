import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1c',
  template:`<p>h0me1 works!<p> <router-outlet></router-outlet>`,
  styleUrls: ['./home1c.component.css']
})
export class Home1cComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}