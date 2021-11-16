import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations = ["AP Hogeschool","Statue of Liberty","Eiffel Tower","Golden Gate Bridge"]

  constructor() { }

  ngOnInit(): void {
  }



}
