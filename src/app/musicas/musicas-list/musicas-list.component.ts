import { MusicasService } from './../musicas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from './../../shared/models/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../usuario/usuario.service';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-musicas-list',
  templateUrl: './musicas-list.component.html',
  styleUrls: ['./musicas-list.component.css']
})
export class MusicasListComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  produtos: UsuarioModel[] = [];
  constructor(
    private musicasService: MusicasService,
    private usuarioService : UsuarioService,
    private toastr : ToastrService,
    private router : Router,
    private usuariosService : UsuariosService
   ) { }

  ngOnInit(): void {
    this.getAllMusicas();
  }

  deletar(id_usuario_list){
    this.usuariosService.deleteMusicas(id_usuario_list).subscribe(
      (success) => {
        let index = this.produtos.findIndex((elemento) =>{return elemento.id == id_usuario_list});
        this.produtos.splice (index, 1);   
        this.toastr.success("Produto deletado com sucesso");
        this.getAllMusicas();
      },
      (error)=> this.toastr.error('Erro ao deletar')
    );
}


  private getAllMusicas() {
    this.musicasService.getAllMusicas().subscribe(
      (success) => {
        console.log (success);
        this.usuarios = success;
      },
      (error)=> this.toastr.error('Erro ao consultar a api')
    );
  }

}
