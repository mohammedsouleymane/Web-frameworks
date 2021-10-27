import { Component, OnInit } from '@angular/core';
import { evaluate} from 'mathjs'
@Component({
  selector: 'app-calculator-ui',
  templateUrl: './calculator-ui.component.html',
  styleUrls: ['./calculator-ui.component.css']
})
export class CalculatorUiComponent implements OnInit {

  constructor() { }
  numbers = ['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/']
  text = ""
  ngOnInit(): void {
  }

  changeText(text: string){
    
    if (text == "=")
      this.text = evaluate(this.text)
    else
      this.text += text
}
}