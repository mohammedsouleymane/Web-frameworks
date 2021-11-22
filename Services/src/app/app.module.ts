import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WelcomeSelectComponentComponent } from './welcome-select-component/welcome-select-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { TextToggleComponentComponent } from './text-toggle-component/text-toggle-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    WelcomeSelectComponentComponent,
    WelcomeComponent,
    TextComponentComponent,
    TextToggleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
