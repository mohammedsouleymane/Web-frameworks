import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../Services/data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private service: DataService) { this.Load(true) }

  shoppinglist:Item[] = [];
  total:number= 0;
  async Load(start:boolean){
    if(start){
      this.shoppinglist = (await this.service.shoppingList).sort((a, b) => a.Amount - b.Amount);    } 
    this.total = (await this.service.shoppingList).map(x => x.Price * x.Amount).reduce((sum, current) => sum + current, 0);
  }

  async Remove(id:number)
  {
    this.Load(false)
    this.service.Delete(id)   
    this.shoppinglist = (await this.service.shoppingList).sort((a, b) =>  (b.Amount* a.Price) - (a.Amount * a.Price))
  }
  async ngOnInit() {
   
  }
}
