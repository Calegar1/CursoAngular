import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  isAutenticado: boolean = false;
  constructor(private http : HttpClient) { }

  getOneUsuario(id_usuario){
    return this.http.get("http://localhost:8080/usuarios" + id_usuario)
  }

  isUsuarioAutenticado(){
    return this.isAutenticado;
  }

  setIsAutenticado(value){
    this.isAutenticado = value;
  }
  postDados(obj) {
    return this.http.post("http://localhost:8080/usuarios/auth", obj);
  }
  
}
