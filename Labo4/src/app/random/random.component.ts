import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  num = _.random(1,100)
  constructor() { 
    setInterval(() => this.num = _.random(1,100),2000)
  }

  ngOnInit(): void {
  }

}
