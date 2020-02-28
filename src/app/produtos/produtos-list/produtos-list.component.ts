import { UsuarioModel } from './../../shared/models/usuario.model';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  produtos: UsuarioModel[] = [];
  constructor(private usuariosService : UsuariosService,
    private toastr : ToastrService,
    private router : Router) { } 

    

  ngOnInit(): void {
     this.consultarProdutos();    
    }

    
    
  consultarProdutos() {
      this.usuariosService.consultarProdutos().subscribe(
        (success) => {
          console.log (success);
          this.produtos = success;
        },
        (error)=> this.toastr.error('Erro ao consultar a api')
      );
    
  }

  editar(id_usuario_edit){

    this.router.navigate(['/produtos/edit', id_usuario_edit]);
  
}

  deletar(id_usuario_list){
    this.usuariosService.deleteProduto(id_usuario_list).subscribe(
      (success) => {
        let index = this.produtos.findIndex((elemento) =>{return elemento.id == id_usuario_list});
        this.produtos.splice(index, 1)
        this.toastr.success("Produto deletado com sucesso");
        // this.consultarProdutos();
        
      },
      (error)=> this.toastr.error('Erro ao deletar')
    );
}}
