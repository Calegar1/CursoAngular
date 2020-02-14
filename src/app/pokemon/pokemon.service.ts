import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

     getAllPokemons(offset , limit) {
      return this.http.get('https://pokeapi.co/api/v2/pokemon-form?limit='+ limit +'&offset='+ offset);
    }

  getOnePokemon(url){
      return this.http.get(url);
  }
  constructor(private http : HttpClient) { 
  }
}
