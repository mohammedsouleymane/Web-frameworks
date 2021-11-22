import { Injectable } from '@angular/core';
import pokemons from  '../assets/pokedex.json'
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons = pokemons
  favorites:boolean[] = [];
  constructor() { 
    pokemons.forEach(element => {
      this.favorites.push(false)
    });
  }
  getPokemonId(id:number)
  {
    return pokemons[id-1];
  }

}
