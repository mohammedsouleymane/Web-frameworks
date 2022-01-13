import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-add-product-to-list',
  templateUrl: './add-product-to-list.component.html',
  styleUrls: ['./add-product-to-list.component.css']
})
export class AddProductToListComponent implements OnInit {

  constructor(private service: DataService) {}
  showNotification = false
  get products(){return this.service.products;}
  Add(id:number, amount:number)
  {
    if(this.service.shoppinglist.find(x => x.id == id))
    {
      this.service.shoppinglist.find(x => x.id == id).Amount += amount 
    }
    else
    {
      let product = this.service.products.find(x => x.Id == id)
      this.service.shoppinglist.push({
        "Name": product.Name,
        "Amount": amount,
        "Price": product.Price,
        "id": id
      })
  }
    this.showNotification = true
    setTimeout(() => {this.showNotification = false } , 2500)
  }
  
  async ngOnInit() {
  }
}
