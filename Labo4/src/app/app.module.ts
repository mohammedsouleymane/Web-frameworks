import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { CounterComponent } from './counter/counter.component';
import { RandomComponent } from './random/random.component';
import { TimerComponent } from './timer/timer.component';
import { RandomNumIfComponent } from './random-num-if/random-num-if.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherNgForComponent } from './weather-ng-for/weather-ng-for.component';
import { PersonComponent } from './person/person.component';
import { DeelbaarheidComponent } from './deelbaarheid/deelbaarheid.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    CounterComponent,
    RandomComponent,
    TimerComponent,
    RandomNumIfComponent,
    WeatherComponent,
    WeatherNgForComponent,
    PersonComponent,
    DeelbaarheidComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
