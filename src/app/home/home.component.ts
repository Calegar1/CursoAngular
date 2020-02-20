import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  varh1: any = "Mercado não pago";

  constructor() { }

  ngOnInit(): void {
  }

}
