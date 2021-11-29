import { Component, OnInit } from '@angular/core';
import { DelijnService } from '../services/delijn.service';

@Component({
  selector: 'app-delijn',
  templateUrl: './delijn.component.html',
  styleUrls: ['./delijn.component.css']
})
export class DelijnComponent implements OnInit {

  halte: any = []; 
  
  constructor(private service: DelijnService) { 
    this.service.Json.subscribe(res => this.halte = res)

  }

  get Bestemmingen()
  {
    return this.halte.halte[0].lijnen;
    
  }
  ngOnInit(): void {
  }

}
