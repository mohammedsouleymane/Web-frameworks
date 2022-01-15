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
    this.service.pokemons[parseInt(id) - 1].isFavorite = !this.service.pokemons[parseInt(id) - 1].isFavorite;
  }
}
