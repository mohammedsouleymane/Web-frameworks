import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  time = (new Date()).getHours();
  constructor() { 
    setInterval(() => this.time = (new Date()).getHours())
  }

  ngOnInit(): void {
  }

}
