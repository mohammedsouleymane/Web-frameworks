import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private _http: HttpClient) { }

  Post(text:string, date:string)
  {
    this._http.post("http://localhost:3000/posts",{"text":text, "date":date}).toPromise()
  }

  Delete(id:string)
  {
    this._http.delete("http://localhost:3000/posts/"+id).toPromise()
  }

  Update(id:string, text:string, date:string)
  {
    this._http.put("http://localhost:3000/posts/"+id, {"text":text, "date":date}).toPromise()
  }
  get Posts() 
  {
    return this._http.get<IJournal[]>("http://localhost:3000/posts").toPromise()
  }
}

export interface IJournal{
  _id:string;
  text:string;
  date:string;
}