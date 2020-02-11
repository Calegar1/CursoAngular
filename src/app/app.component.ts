import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 nome ="Fabio";
 
 alterar(){
   this.nome = "123456"
 }

  mostrar(){
    alert("SHOW");
    let title = 'ppa';
  }
  show(x){
    this.title = x;
  }
  mostraroutro(y){
    alert(y);
  }
  
}