import { MusicasService } from './../musicas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from './../../shared/models/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../usuario/usuario.service';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-musicas-list',
  templateUrl: './musicas-list.component.html',
  styleUrls: ['./musicas-list.component.css']
})
export class MusicasListComponent implements OnInit {

  mockData = [
    {id: 1, nome: "Fábio 1", compositor : "Fábio 1", iframe : "https://www.youtube.com/embed/7V5jU4PUAR8", urlSafe : null},
    {id: 2, nome: "Fábio 2", compositor : "Fábio 2", iframe :  "https://www.youtube.com/embed/S845VTd4X6g", urlSafe : null}
  ]

  usuarios: UsuarioModel[] = [];
  produtos: UsuarioModel[] = [];
  constructor(
    private musicasService: MusicasService,
    private usuarioService : UsuarioService,
    private toastr : ToastrService,
    private router : Router,
    private usuariosService : UsuariosService,
    private sanitizer: DomSanitizer
   ) { }

  ngOnInit(): void {
    this.mockData.forEach (
      element => {
        element.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(element.iframe);
      }
      )

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
        this.usuarios = success;
        console.log (this.usuarios);
      },
      (error)=> this.toastr.error('Erro ao consultar a api')
    );
  }

}
