import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})


export class PersonComponent implements OnInit {

  people:Person[] = [new Person("Mohammed","Souleymane","07-10-2001"), new Person("Salis","Meiyaki","04-21-2007"),new Person("Ahmed","Meiyaki","03-17-2005")];
  constructor() {

   }

  ngOnInit(): void {
  }

}

export class Person{
  readonly Firstname: string;
  readonly Lastname: string;
  readonly BirthDate: string;
  constructor(first:string, last:string, birthDate:string) {
    this.Firstname = first;
    this.Lastname = last;
    this.BirthDate = birthDate;
   }

   getAge() { 
     return Math.floor((new Date().getTime()-new Date(this.BirthDate).getTime())/31557600000)
   }
}