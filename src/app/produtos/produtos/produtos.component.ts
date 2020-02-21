import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : FormGroup;
  isEdicao: any;
  idProduto = 0;
  constructor(private formBuilder : FormBuilder, 
     private usuariosService: UsuariosService,
    private toastr: ToastrService,
    private router: Router
    ) { 
    this.produtos = this.formBuilder.group({
      nome: ['', []],
      preco: ['',[]],
      descricao: ['',[]]
      });

  }

  ngOnInit(): void {
  }


  onCadastrar() {
 
    let obj = {
      nome: this.produtos.value.nome,
      descricao: this.produtos.value.descricao,
      preco: this.produtos.value.preco,
      
      }

      this.usuariosService.cadastrarProduto(obj).subscribe(

        (success) => {
          this.toastr.success
            ("Produto inserido com sucesso");
            this.router.navigate(['/produtos']);
            
        }
      )
    
  }

}