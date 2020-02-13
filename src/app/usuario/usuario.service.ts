import { Injectable } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  getAll(){
    return [
       {id: 1, primeiro_nome: 'Fabrizio', sobrenome: 'Borelli', apelido: 'fborelli'},
       {id: 2, primeiro_nome: 'Nelson', sobrenome: 'Gonçalves', apelido: 'negool'},
       {id: 3, primeiro_nome: 'Fabio', sobrenome: 'Calegari', apelido: 'fcalegari'},
       {id: 4, primeiro_nome: 'Miriã', sobrenome: 'Pereira', apelido: 'mpereira'}
     ]; }
     
     
     getAllPokemons(offset , limit) {
      return this.http.get('https://pokeapi.co/api/v2/pokemon-form?limit='+ limit +'&offset='+ offset);
    }
  getAllUsers(){
  return this.http.get(" 	http://dummy.restapiexample.com/api/v1/employees");
  }

  getOnePokemon(url){
      return this.http.get(url);
  }
  constructor(private http : HttpClient) { 
  }
}
