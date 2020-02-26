import {  Router } from '@angular/router';
import { MenuDataService } from './../shared/services/menu-data.service';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMostrarAdmin = false;
  btnlogin = " ";
  btnclass = "invisible"
  constructor(private loginService: LoginService, private menuDataService: MenuDataService, private router: Router) { }

  ngOnInit(): void { 
 this.menuDataService.menuMessageBus.subscribe(
   (response) => {
     console.log('menu comp', response);
     this.isMostrarAdmin = response;
    if ( this.loginService.isAutenticado == true){
      this.btnlogin = " ";
      this.btnclass = "invisible";
    }
    else{
      this.btnlogin = "Deslogar"
      this.btnclass = "btn btn-outline-danger";
    }

   }

 )
  }
  deslogar() {
    this.menuDataService.menuMessageBus.next(false);
    this.loginService.setIsAutenticado(false);
    this.router.navigate(['/home'])
    }
}
