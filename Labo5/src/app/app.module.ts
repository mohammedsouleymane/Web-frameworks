import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RedboxComponent } from './redbox/redbox.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';
import { CalculatorUiComponent } from './calculator-ui/calculator-ui.component';
import { FormsModule } from '@angular/forms';
import { PersoonsgegevensComponent } from './persoonsgegevens/persoonsgegevens.component';
import { RandomnumbersComponent } from './randomnumbers/randomnumbers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CalculatorComponent,
    RedboxComponent,
    TodolistComponent,
    MovieplayerComponent,
    CalculatorUiComponent,
    PersoonsgegevensComponent,
    RandomnumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"welcome", component: WelcomeComponent},
      {path:"movieplayer", component: MovieplayerComponent},
      {path:"todo", component: TodolistComponent},
      {path:"redbox", component: RedboxComponent},
      {path: "**", component: WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
