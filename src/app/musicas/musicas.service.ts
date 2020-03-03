import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor( private http : HttpClient) { }

  getAllMusicas(){
    return this.http.get<UsuarioModel[]>("http://localhost:8080/musicas");
  }

  deleteMusicas(id_musica_list){
    return this.http.delete("http://localhost:8080/musicas" + id_musica_list)
  }

  postDados(obj) {
    return this.http.post("http://localhost:8080/musicas", obj);
  }

}
