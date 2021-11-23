import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private service: PokedexService) { }
  pokemons = this.service.pokemons;
  ngOnInit(): void {
  }

  setFavorite(id:string)
  {

    this.service.favorites[parseInt(id) - 1] =  !this.service.favorites[parseInt(id) - 1] 
  }
  getFavorite(id:string)
  {
    return this.service.favorites[parseInt(id) - 1] 
  }
}
