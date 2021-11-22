import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  url = "https://mdbootstrap.com/img/Photos/Slides/img%20("+1+").jpg"
  arr:string[] = [];
  index = 1
  constructor() {
    for (let i = 1; i < 153; i++) {
      this.arr.push( "https://mdbootstrap.com/img/Photos/Slides/img%20("+i+").jpg")
    }
   }
}
