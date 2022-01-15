import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-randomnumbers',
  templateUrl: './randomnumbers.component.html',
  styleUrls: ['./randomnumbers.component.css']
})
export class RandomnumbersComponent implements OnInit {

  constructor() { 
    setInterval(() =>{
        if(this.start == true)
          this.number = _.random(this.min,this.max)},1000)   
  }
  @Input("min") min = 0
  @Input("max") max = 100
  number:number = _.random(this.min,this.max)
  start = false;
  ngOnInit(): void {
  }
 changeState(){
this.start = !this.start;
 }

}
