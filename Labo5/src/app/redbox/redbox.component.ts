import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redbox',
  templateUrl: './redbox.component.html',
  styleUrls: ['./redbox.component.css']
})
export class RedboxComponent implements OnInit {

  x:number | undefined;
  y:number | undefined;
  constructor() { 
  }

  ngOnInit(): void {
  }

  DoSomething(event: MouseEvent, div:any)
  { 
    this.x = event.pageX-div.offsetLeft
    this.y = event.pageY-div.offsetTop;
  }
}
