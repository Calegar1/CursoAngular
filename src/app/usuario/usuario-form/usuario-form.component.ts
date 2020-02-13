import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios : any = [];
  pokemons : any = [];
  offset : number = 0;
  select: number;
  users : any = [];
  textoBotao = "Meu botão";
  isHabilitado = true;

  constructor(private usuarioService : UsuarioService) {
    this.usuarios = this.usuarioService.getAll();
    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success) => {  
        console.log(success)
        this.pokemons = success;
                                          },
    );

   //this.users.usuarioService.getAll();
    this.usuarioService.getAllUsers().subscribe(
      (success)  => {
       this.users = success;
     },
     );
  }
  desabilitarBotao(){
      if (this.isHabilitado == true){
         this.isHabilitado = false;
      
       } else { 
        this.isHabilitado = true;
      }
  
  } 

  proximaPagina(){
    this.offset += this.select;
    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success)  => {
       console.log(success)
       this.pokemons = success;
     },
     (error) => {console.log(error)}
     );
  }


    

  ngOnInit(): void {
  }

}
