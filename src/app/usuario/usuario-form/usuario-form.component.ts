import { UsuarioModel } from './../../shared/models/usuario.model';
import { UsuarioService } from './../usuario.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  addusuarios: FormGroup;


  usuario : UsuarioModel;
  // usuarios: any = [];
  offset: number = 0;
  limit: number = 10;
  mostrartexto = "Meu botão";
  isHabilitado = true;

  user: any = [];
  cep: any;
  endereco: any = [];

  isEdicao = false;
  idUsuario = 0;
  titulo : any ='';
  textoBotao: any = '';
  classbtn: any = '';


  constructor(
    private enderecoService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService

  ) {
    console.log(this.activatedRoute);

    this.addusuarios = new FormGroup({

      usuario: new FormGroup({
        id: new FormControl(''),
        nome: new FormControl(''),
        senha: new FormControl(''),
        email: new FormControl(''),
        cep:new FormControl(''),
        cidade: new FormControl(''),
        numero: new FormControl(''),
        complemento: new FormControl(''),
        bairro : new FormControl(''),
        logradouro: new FormControl(''),
        estado: new FormControl('')
      })
    });

  }

  getEndereco() {
    let cep = this.addusuarios.get('usuario.cep');
    console.log(this.cep)
    this.enderecoService.getCep(cep.value).subscribe(
      (response: any) => {
        console.log(response);
        let obj = {
          cidade: response.localidade,
          logradouro: response.logradouro,
          bairro: response.bairro,
          estado: response.uf,
          cep: response.cep
        }

        this.addusuarios.patchValue( { usuario : obj }  );
        
              },

    );

  }
  onSubmit() {
    console.log(this.addusuarios);

   this.usuario = Object.assign({}, this.addusuarios.value.usuario);
    if (this.isEdicao == false){
      this.enderecoService.postDados(this.usuario).subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success
            ("Usuario inserido com sucesso : " + response.id);
          this.router.navigate(['/usuarios']);
  
        },
        (error) => { }
      );
    }
    else{
      this.usuarioService.updateUsuario (this.idUsuario, this.usuario).subscribe(
        (response: any) => {
          this.toastr.success
            ("Usuario alterado com sucesso : " + response.id);
          this.router.navigate(['/usuarios']);
        }
      );
    }

    // this.enderecoService.postDados(obj).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.toastr.success
    //       ("Usuario inserido com sucesso : " + response.id);
    //     this.router.navigate(['/usuarios']);

    //   },
    // )

  }



  inverte() {
    if (this.isHabilitado == true)
      this.isHabilitado = false
    else {
      this.isHabilitado = true
    }
  }

  //poderia ser assim! this.ishabilitado = !this.isHabilitado!


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("é edição");
          this.isEdicao = true;
          this.titulo = "Atualizar cadastro"
          this.textoBotao = "Atualizar"
          this.classbtn = "btn btn-block btn-outline-dark"
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (success: UsuarioModel) => {
              console.log ( success );
              this.usuario = success;
              this.addusuarios.patchValue ( { usuario : this.usuario }  );

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

}
