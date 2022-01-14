import { Injectable } from '@angular/core';
import {Products} from '../../../Data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = Products
  shoppinglist = []
  constructor() { }
}
