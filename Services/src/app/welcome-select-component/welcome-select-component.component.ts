import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome-select-component',
  templateUrl: './welcome-select-component.component.html',
  styleUrls: ['./welcome-select-component.component.css']
})
export class WelcomeSelectComponentComponent implements OnInit {

  constructor(private service: WelcomeService) { }
  get url()
  {
    return this.service.url;
  }

  get arr()
  {
    return this.service.arr
  }

  set url(url:string)
  {
    this.service.url = url
  }
  ngOnInit(): void {
  }


}
