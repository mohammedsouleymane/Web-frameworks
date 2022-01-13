import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private service: DataService) {this.service.shoppinglist.sort((a, b) => a.Amount - b.Amount);  }
  get shoppinglist():any[]{
    return this.service.shoppinglist;
  }
  get total():number{
    return this.service.shoppinglist.map(x => x.Price * x.Amount).reduce((sum, current) => sum + current, 0);
  }
  Remove(id:number)
  {
    this.service.shoppinglist = this.service.shoppinglist.filter(x => x.id != id)
    this.service.shoppinglist = this.service.shoppinglist.sort((a, b) => (b.Price * b.Amount) - (a.Price * a.Amount));
  }
  async ngOnInit() {
   
  }
}
