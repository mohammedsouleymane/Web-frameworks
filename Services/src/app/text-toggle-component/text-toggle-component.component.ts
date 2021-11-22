import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text-toggle-component',
  templateUrl: './text-toggle-component.component.html',
  styleUrls: ['./text-toggle-component.component.css']
})
export class TextToggleComponentComponent implements OnInit {

  constructor(private service: TextService) { }

  get Text()
  {
    return this.service.text
  }
  ngOnInit(): void {
  }
  get Visibility()
  {
    return this.service.visibility
  }

  set Visibility(hidden:boolean)
  {

    if(hidden == true)
      this.service.text = ""
    this.service.visibility = hidden
  }
}
