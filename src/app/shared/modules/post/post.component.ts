import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  @Input() data:any='';

  constructor() { }

  ngOnInit(): void {
  }

}