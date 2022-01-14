import { Component, OnInit } from '@angular/core';
import { DataService, IProduct } from '../Services/data.service';
@Component({
  selector: 'app-add-product-to-list',
  templateUrl: './add-product-to-list.component.html',
  styleUrls: ['./add-product-to-list.component.css']
})
export class AddProductToListComponent implements OnInit {

  constructor(private service: DataService) {this.getProducts()}
  showNotification = false
  products:IProduct[] = []
  async getProducts(){ this.products = await this.service.Products}

  async Add(id:number, amount:number)
  {
    if( (await this.service.shoppingList).find(x => x.id == id))     
      await this.service.Update(amount, id)    
    else
      await this.service.Post(this.products.find(x => x.Id == id), amount)
    this.showNotification = true
    setTimeout(() => {this.showNotification = false } , 2500)
  }
  
  async ngOnInit() {
  }
}
