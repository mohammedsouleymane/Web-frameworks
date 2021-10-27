import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-weather-ng-for',
  templateUrl: './weather-ng-for.component.html',
  styleUrls: ['./weather-ng-for.component.css']
})
export class WeatherNgForComponent implements OnInit {

  degrees:number[] = [_.random(0,25),_.random(0,25),_.random(0,25),_.random(0,25),_.random(0,25)]
  location:string[] = ["Brussel","Capetown","Kopenhagen","Amsterdam","Moscow"]
  index:number[] = [0,1,2,3,4]
  constructor() { 
    setInterval(() =>{ this.degrees = [_.random(0,25),_.random(0,25),_.random(0,25),_.random(0,25),_.random(0,25)]},2000)
  }

  ngOnInit(): void {
  }

}
