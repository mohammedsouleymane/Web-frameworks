import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) {
    this.ids().then((value) =>{value.forEach(x => this._http.delete<{}>(`http://localhost:3000/ShoppingList/${x}`).toPromise())})   
}

  get Products(){
    return this._http.get<IProduct[]>("http://localhost:3000/Products").toPromise()
  }

  get shoppingList(){
    return this._http.get<Item[]>("http://localhost:3000/ShoppingList").toPromise()
  }

  async Post(product: IProduct,amount: number)
  {
    let item = {
      Name : product.Name,
      Amount: amount,
      Price : product.Price,
      id: product.Id
    }
      this._http.post<{}>("http://localhost:3000/ShoppingList", item).toPromise()
  }

  async Update (amount: number, id: number){
    let item:Item = (await this.shoppingList).find(x => x.id == id)
    item.Amount += amount
    this._http.put<{}>(`http://localhost:3000/ShoppingList/${id}`, item).toPromise()
  }
  
  async Delete(id:number) {
      this._http.delete<Item>(`http://localhost:3000/ShoppingList/${id}`).toPromise()
  }

  async ids(){
    return (await this.shoppingList).map(x => x.id)
  }
}

export interface IProduct{
  Id: number,
  Name: string,
  Brand: string,
  Size: string,
  Price: number
}

export interface Item{
  Name: string,
  Amount: number,
  Price: number,
  id: number
}