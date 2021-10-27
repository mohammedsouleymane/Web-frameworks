import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { 
    setInterval(() =>{},10);
  }

  list:string[] = []
  ngOnInit(): void {
  }

  removeItem(index:number)
  { 
    this.list.splice(index, 1);
  }
  addItem(item:string)
  {
    this.list.push(item)
  }
}
