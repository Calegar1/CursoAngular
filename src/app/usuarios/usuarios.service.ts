import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService { 

  constructor(private http : HttpClient) { }

  getAllUsuarios () {
    return this.http.get("http://localhost:8080/usuarios");
  }

  cadastrarProduto(obj) { 
  return this.http.post("http://localhost:8080/produtos", obj);
  }


consultarOneProduto(id_usuario){
  return this.http.get("http://localhost:8080/produtos/"+ id_usuario);
}

  consultarProdutos () {
    return this.http.get("http://localhost:8080/produtos");
  }
  deleteUsuario(id_usuario){
    return this.http.delete("http://localhost:8080/usuario/"+ id_usuario)
  }
  updateProduto(id_usuario, obj){
    return this.http.post ("http://localhost:8080/produtos/" + id_usuario , obj)
  };

}