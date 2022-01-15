import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { 
    setInterval(() =>{},10);
  }

  @Input() title = "Todo list"
  @Input() length = -1
  list:string[] = []
  ngOnInit(): void {
  }

  removeItem(index:number)
  { 
    this.list.splice(index, 1);
  }
  addItem(item:string)
  {
    if(this.length > this.list.length )
      this.list.push(item)
  }
}
