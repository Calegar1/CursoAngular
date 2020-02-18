import { CepService } from './../../shared/services/cep.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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

  constructor(private enderecoService: UsuarioService, private formBuilder: FormBuilder, private cepService: CepService) {
    this.addusuarios = this.formBuilder.group({
      nameInput: ['', []],
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
    let cep = this.addusuarios.value.cepInput;
    this.cepService.getCep(cep).subscribe(
      (response: any) => {
        console.log(response);
        this.addusuarios.patchValue(
          {
            logradouroInput : response.logradouro,
            cidadeInput: response.localidade,
            bairroInput : response.bairro,
            estadoInput : response.estado
          }
        )
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    console.log(this.addusuarios)
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
