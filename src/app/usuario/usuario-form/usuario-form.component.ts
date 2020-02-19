import { UsuarioService } from './../usuario.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  addusuarios: FormGroup;

  usuarios: any = [];
  offset: number = 0;
  limit: number = 10;
  mostrartexto = "Meu botão";
  isHabilitado = true;

  user: any = [];
  cep: number;
  endereco: any = [];

  isEdicao = false;
  idUsuario = 0;

  constructor(
    private enderecoService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService

  ) {
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("é edição");
          this.isEdicao = true;
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (success: any) => {
              let obj = {
                nomeInput: success.nome,
                emailInput: success.email,
                senhaInput: success.senha,
                cepInput: success.cep,
                logradouroInput: success.logradouro,
                numeroInput: success.numero,
                complementoInput: success.complemento,
                cidadeInput: success.cidade,
                bairroInput: success.bairro,
                estadoInput: success.estado,
              };


              this.addusuarios.patchValue(obj);
            },
            (error) => { },
          )
        }
        else {
          console.log("é criação")
          this.isEdicao = false;
        }
      }
    )

    this.addusuarios = this.formBuilder.group({
      nomeInput: ['', []],
      senhaInput: ['', []],
      emailInput: ['', []],
      cepInput: ['', []],
      cidadeInput: ['', []],
      logradouroInput: ['', []],
      numeroInput: ['', []],
      complementoInput: ['', []],
      bairroInput: ['', []],
      estadoInput: ['', []]
    });

  }

  getEndereco() {
    this.cep = this.addusuarios.value.cepInput;
    console.log(this.cep)
    this.enderecoService.getCep(this.cep).subscribe(
      (response: any) => {
        console.log(response);
        this.addusuarios.patchValue(
          {
            cidadeInput: response.localidade,
            logradouroInput: response.logradouro,
            bairroInput: response.bairro,
            estadoInput: response.uf
          }
        )
        this.endereco = response;
      },

    );

  }
  onSubmit() {
    console.log(this.addusuarios);

    let obj = {
      nome: this.addusuarios.value.nomeInput,
      email: this.addusuarios.value.emailInput,
      senha: this.addusuarios.value.senhaInput,
      tipo_usuario: 1,
      cep: this.addusuarios.value.cepInput,
      logradouro: this.addusuarios.value.logradouroInput,
      numero: this.addusuarios.value.numeroInput,
      complemento: this.addusuarios.value.complementoInput,
      cidade: this.addusuarios.value.cidadeInput,
      bairro: this.addusuarios.value.bairroInput,
      estado: this.addusuarios.value.estadoInput
    }
    if (this.isEdicao == false){
      this.enderecoService.postDados(obj).subscribe(
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
      this.usuarioService.updateUsuario (this.idUsuario, obj).subscribe(
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
  }

}
