import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  logoutBtn: any = '';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    if( this.loginService.isAutenticado == true){
      this.logoutBtn = "";

    }
  }

}
