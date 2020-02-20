import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url : any = "http://localhost:8080/usuarios/";
isAutenticado: boolean = false;
  constructor(private http : HttpClient) { }

  getOneUsuario(id_usuario){
    return this.http.get(this.url + id_usuario)
  }

  isUsuarioAutenticado(){
    return this.isAutenticado;
  }

  setIsAutenticado(value){
    this.isAutenticado = value;
  }
  postDados(obj) {
    return this.http.post(this.url, obj);
  }
  
}
