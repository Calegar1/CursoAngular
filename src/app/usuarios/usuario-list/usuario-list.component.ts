import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
 usuarios: any = [];
  constructor(private usuarioService : UsuarioService) {

   }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  private getAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(
      (success) => {
        console.log (success);
        this.usuarios = success;
      },
      (error)=> {console.log (error)}
    );
  }

}
