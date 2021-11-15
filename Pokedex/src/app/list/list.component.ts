import { Component, OnInit } from '@angular/core';
import pokemons from  '../../assets/pokedex.json'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons = pokemons;
  constructor() { }

  ngOnInit(): void {
  }

}
