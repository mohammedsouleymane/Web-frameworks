import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars = [new Car("Ford"),new Car("Jaguar",["F-Pace","E-Pace"]),new Car("Mercedes")]
  constructor() { }
  ngOnInit(): void {
  }

}

class Car{
 

  name: string
  models: string[]
  constructor(name: string, models: string[] = []) { 
    this.name = name;
    this.models = models;
  }
}