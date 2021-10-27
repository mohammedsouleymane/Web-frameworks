import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  counter = 0;

  constructor() { }

  increment()
  {
    return this.counter++;
  }
  setCounter(num:string)
  { 
    this.counter = parseInt(num)
  }
  ngOnInit(): void {
  }

}
