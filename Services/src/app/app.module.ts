import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WelcomeSelectComponentComponent } from './welcome-select-component/welcome-select-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { TextToggleComponentComponent } from './text-toggle-component/text-toggle-component.component';
import { DelijnComponent } from './delijn/delijn.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    WelcomeSelectComponentComponent,
    WelcomeComponent,
    TextComponentComponent,
    TextToggleComponentComponent,
    DelijnComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
