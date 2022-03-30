import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class PokeListComponent implements OnInit {

  constructor(private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeService.apiListAllPokemons.subscribe(
      res => res
    );
  }

}
