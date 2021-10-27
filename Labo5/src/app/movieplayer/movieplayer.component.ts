import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.component.html',
  styleUrls: ['./movieplayer.component.css']
})
export class MovieplayerComponent implements OnInit {

  constructor() { }

  width = 426
  height = 240
  ngOnInit(): void {
  }
  setDimensions(size:string)
  {
    this.width = parseInt(size.split("x")[0])
    this.height = parseInt(size.split("x")[1])
  }
}
