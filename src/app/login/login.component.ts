import { MenuDataService } from './../shared/services/menu-data.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  meuForm : FormGroup;
  constructor(private loginService: LoginService,  private formBuilder: FormBuilder, private toastr : ToastrService,
    private router: Router, private menuDataService: MenuDataService ) { }
  ngOnInit(): void {
    
    this.meuForm = this.formBuilder.group({
    usuario: ['', [ ]],
    senha: ['',[ ]]
  }
  
);
  }


  logar() {
    // this.toastr.success(`Usuário logado com sucesso`);
    // this.router.navigate(['/admin']);
  }

  deslogar() {
  
  this.loginService.setIsAutenticado(false);
  this.router.navigate(['/home'])
;  }

  onSubmit(){
    let obj = {
      email: this.meuForm.value.usuario,
      senha: this.meuForm.value.senha,
    }
    
    this.loginService.postDados(obj).subscribe(
      (success) => {

        if (success == true){
          this.menuDataService.menuMessageBus.next(true);
          this.router.navigate(['/admin/home'])
          this.toastr.success(`Usuário logado com sucesso`);
        }
        else{
          this.toastr.error(`Usuário não cadastrado. Verifique as informaçõe`);
        }
      this.loginService.setIsAutenticado(success);  
      },
      (error) => {
        this.toastr.error(`Algo deu Errado :/ `);
      }
    );
    // console.log (this.meuForm)
    // if(this.meuForm.value.usuario == "calegari2711@gmail.com" 
    // && this.meuForm.value.senha == "suasenha"
    // ){
    //   console.log("DEU CERTO")}
    //   else{
    //     console.log("NÃO FOI DESSA VEZ")
    //   }
  }
  
  getCampo(value){
    return this.meuForm.get( value );


    
    
  }

  notificar(){
    this.menuDataService.menuMessageBus.next(true);
};

}