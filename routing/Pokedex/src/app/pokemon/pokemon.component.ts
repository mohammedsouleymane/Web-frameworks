import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pokemons from  '../../assets/pokedex.json'
import { PokedexService } from '../pokedex.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private service: PokedexService) { }
  id = 0
  pokemon = this.service.pokemons[this.id]
  
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    let id = params.get("id")!;
    this.id = parseInt(id);
    this.pokemon = this.service.pokemons[this.id - 1]
  })
}

}
