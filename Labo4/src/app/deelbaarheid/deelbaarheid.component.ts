import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deelbaarheid',
  templateUrl: './deelbaarheid.component.html',
  styleUrls: ['./deelbaarheid.component.css']
})
export class DeelbaarheidComponent implements OnInit {

  arr = [2,4,5,6,8,9,10,14]
  constructor() { }

  getIndex(num:number){
    return this.arr.findIndex(arr => arr == num);
  }
  ngOnInit(): void {
  }

}
