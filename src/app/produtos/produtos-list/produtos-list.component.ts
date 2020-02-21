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
  produtos: any = [];
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

}
