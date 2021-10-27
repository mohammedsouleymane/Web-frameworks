import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-random-num-if',
  templateUrl: './random-num-if.component.html',
  styleUrls: ['./random-num-if.component.css']
})
export class RandomNumIfComponent implements OnInit {

  num = -1;
  constructor() { 
      setInterval(() => this.num = _.random(1,10),2000);
  }

  ngOnInit(): void {
  }

}
