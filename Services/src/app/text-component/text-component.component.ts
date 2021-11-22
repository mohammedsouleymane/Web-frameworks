import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {

  constructor(private service: TextService) { }

  set Text(txt:string)
  {
    this.service.text = txt
  }
  get Text()
  {
    return this.service.text
  }
  ngOnInit(): void {
  }

  
}
