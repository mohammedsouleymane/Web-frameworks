import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // start = new Date(); 
  timer = ""
  counter = 0
  constructor() { 
    
    //setInterval(() => this.timer = Math.floor((new Date().getTime() - this.start.getTime())/60000),1000)

  setInterval(() => this.timer = moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss'),1000);
  }

  ngOnInit(): void {
  }

}
