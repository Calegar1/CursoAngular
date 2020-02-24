import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService : LoginService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  canActivate(){
    if (this.loginService.isUsuarioAutenticado() == false){
      this.toastr.error("Você deve ser um administrador para acessar")
        this.router.navigate(['/home']);
    }
    return true;  
  }
}
