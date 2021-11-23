import { Injectable } from '@angular/core';
import pokemons from  '../assets/pokedex.json'
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons = pokemons
  favorites = Array(pokemons.length).fill(false);
  constructor() {}
  getPokemonId(id:number)
  {
    return pokemons[id-1];
  }

}
