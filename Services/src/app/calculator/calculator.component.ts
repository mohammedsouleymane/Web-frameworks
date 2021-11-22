import { Component, OnInit } from '@angular/core';
import { MyShareServiceService } from '../services/my-share-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private service: MyShareServiceService) { }
  get Counter()
  {
     return this.service.counter.toString();
  }
  increment()
  {
    return this.service.counter++;
  }
  set Counter(num:string)
  {
    this.service.counter = parseInt(num)
  }

  ngOnInit(): void {
  }
}
