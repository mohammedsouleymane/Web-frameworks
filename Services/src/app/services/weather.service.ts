import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../weather/Interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  url = "http://api.openweathermap.org/data/2.5/weather?q=antwerpen&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53"
  set Url(location:string)
  {
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53`
  }
  get Json(): Observable<RootObject[]>
  {
    return this._http.get<RootObject[]>(this.url)
  }
}
