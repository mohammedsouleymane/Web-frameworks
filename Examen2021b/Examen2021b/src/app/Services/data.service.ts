import { Injectable } from '@angular/core';
import * as data from '../../../Data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = data.Products
  shoppinglist = []
  constructor() { }
}
