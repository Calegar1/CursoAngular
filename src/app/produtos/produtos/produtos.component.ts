import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : FormGroup;
  isEdicao: any = false;
  idProduto = 0;
  titulo;
  textoBotao;
  classbtn

  constructor(private formBuilder : FormBuilder, 
     private usuariosService: UsuariosService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { 
    
  }

  ngOnInit(): void {

    this.produtos = this.formBuilder.group({
      nome: ['', []],
      preco: ['',[]],
      descricao: ['',[]]
      });


    this.activatedRoute.params.subscribe(
      (rota : any) => {
        if (rota.id) {
          console.log("é edição");
          this.isEdicao = true;
           this.titulo = "Atualizar cadastro"
           this.textoBotao = "Atualizar"
           this.classbtn = "btn btn-block btn-outline-dark"
          this.idProduto = rota.id;
  
          this.usuariosService.consultarOneProduto(rota.id).subscribe(
            (success: any) => {
              let obj = {
                nome: success.nome,
                descricao: success.descricao,
                preco: success.preco,
                
              };
  
  
              this.produtos.patchValue(obj);
            },
            (error) => { },
          )
        }
        else {
          console.log("é criação")
           this.titulo = "Cadastrar  usuario";
          this.textoBotao = "Cadastrar"
          this.classbtn = "btn btn-block btn-outline-success"
          this.isEdicao = false;
        }
      }
    )

  }




  

  onCadastrar() {
 
    let obj = {
      nome: this.produtos.value.nome,
      descricao: this.produtos.value.descricao,
      preco: this.produtos.value.preco,
      
      }
        if( this.isEdicao == false){
      this.usuariosService.cadastrarProduto(obj).subscribe(

        (success) => {
          this.toastr.success
            ("Produto inserido com sucesso");
            this.router.navigate(['/produtos/list']);
            
        }
        )
        ;}
          else{
          this.usuariosService.updateProduto (this.idProduto, obj).subscribe(
            (response: any) => {
              this.toastr.success
                ("Produto alterado com sucesso : " + response.id);
              this.router.navigate(['/produtos/list']);
            }
          );
        }
      
    
  }

}