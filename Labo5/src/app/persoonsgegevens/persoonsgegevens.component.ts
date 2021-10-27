import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persoonsgegevens',
  templateUrl: './persoonsgegevens.component.html',
  styleUrls: ['./persoonsgegevens.component.css']
})
export class PersoonsgegevensComponent implements OnInit {

  firstName: string = "";
  lastName: string ="";
  street: string = "";
  strnumber: string = "";
  city: string = "";
  saved:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeSave(){
  this.saved = true;
  } 
}
