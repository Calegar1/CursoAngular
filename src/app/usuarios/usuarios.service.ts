import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http : HttpClient) { }

  getAllUsuarios () {
    return this.http.get("http://cursos.grandeporte.com.br:8080/usuarios");
  }

}
