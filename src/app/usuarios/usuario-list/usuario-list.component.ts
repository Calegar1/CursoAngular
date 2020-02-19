import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
 usuarios: any = [];
  constructor(private usuarioService : UsuarioService,
    private toastr : ToastrService) {

   }

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

editar(){

  
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
