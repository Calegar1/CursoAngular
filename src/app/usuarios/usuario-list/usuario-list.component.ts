import { UsuarioModel } from './../../shared/models/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
 usuarios: UsuarioModel[] = [];
  constructor(private usuarioService : UsuarioService,
    private toastr : ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

   deletar(id_usuario_list){
    this.usuarioService.deleteUsuario(id_usuario_list).subscribe(
      (success) => {
        let index = this.usuarios.findIndex((elemento) =>{return elemento.id == id_usuario_list});
        this.usuarios.splice (index, 1);   
        this.toastr.success("Usuário deletado com sucesso");
        
      },
      (error)=> this.toastr.error('Erro ao deletar')
    );
   
  }

editar(id_usuario_edit){

    this.router.navigate(['/usuarios/edit/', id_usuario_edit]);
  
}

  private getAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(
      (success) => {
        console.log (success);
        this.usuarios = success;
      },
      (error)=> this.toastr.error('Erro ao consultar a api')
    );
  }

}
