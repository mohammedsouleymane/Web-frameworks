import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RootObject } from '../delijn/Interfaces';
@Injectable({
  providedIn: 'root'
})
export class DelijnService {

  
  constructor(private _http: HttpClient) {}
  
  get Json(): Observable<RootObject[]>
  {
    return this._http.get<RootObject[]>("https://www.delijn.be/rise-api-core/haltes/vertrekken/103969/7")
  }
}
