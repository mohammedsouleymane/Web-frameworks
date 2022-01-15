import { Injectable } from '@angular/core';
import pokemons from  '../assets/pokedex.json'
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = pokemons
  constructor() {}
}

interface Pokemon{
  id: string,
  species_id: string,
  height: string,
  weight: string,
  base_experience: string,
  order: string,
  is_default: string,
  name: string,
  sprites: {
    normal: string,
    animated: string
  },
  isFavorite?: boolean

}