import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  url = "https://mdbootstrap.com/img/Photos/Slides/img%20("+1+").jpg"
  arr:string[] = [];
  index = 1
  constructor() { 
    for (let i = 1; i < 153; i++) {
      this.arr.push( "https://mdbootstrap.com/img/Photos/Slides/img%20("+i+").jpg")
    }
  }

  ngOnInit(): void {
  }
}
