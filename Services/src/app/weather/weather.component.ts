import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  location:any;
  constructor(private service: WeatherService) {
    this.service.Json.subscribe(res => this.location = res)
   }

  setPlace(location:any)
  {
    this.service.Url = location
    this.getLocation()
  }

  get Icon()
  {
    return `http://openweathermap.org/img/wn/${this.location.weather[0].icon}@2x.png`
  }
  get Temp()
  {
    return parseInt(this.location.main.temp) - 273
  }
  get Sunrise()
  {
    let num = parseInt(this.location.sys.sunrise) * 1000
    return new Date(num).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'});
  }

  get Sunset()
  {
    let num = parseInt(this.location.sys.sunset) * 1000
    return new Date(num).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})
  }
  getLocation(){
    this.service.Json.subscribe(res => this.location = res)
  }
  ngOnInit(): void {
  }

}
