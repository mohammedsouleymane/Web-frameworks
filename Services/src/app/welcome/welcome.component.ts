import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service: WelcomeService) { 
   
  }

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
