import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logar() {
    this.loginService.setIsAutenticado(true);
  }

  deslogar() {
    this.loginService.setIsAutenticado(false);
  }
}
