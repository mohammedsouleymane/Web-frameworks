import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minmax',
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.css']
})
export class MinmaxComponent implements OnInit {

  constructor() { }

  min = 0
  max = 100
  ngOnInit(): void {
  }

}
