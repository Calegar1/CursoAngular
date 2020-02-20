import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  meuForm : FormGroup;
  constructor(private loginService: LoginService,  private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    
    this.meuForm = this.formBuilder.group({
    usuario: ['', [ ]],
    senha: ['',[ ]]
  }
  
);
  }


  logar(){
    this.loginService.setIsAutenticado( true );

  }

  deslogar  (){
    this.loginService.setIsAutenticado( false );

  }

  onSubmit(){

    let obj = {
      email: this.meuForm.value.usuario,
      senha: this.meuForm.value.senha,
    }
    if(this.meuForm.value.usuario == "calegari2711@gmail.com" 
    && this.meuForm.value.senha == "suasenha"
    )
      console.log("DEU CERTO")
  }
  
  getCampo(value){
    return this.meuForm.get( value );

  }



}