import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug-campo',
  templateUrl: './debug-campo.component.html',
  styleUrls: ['./debug-campo.component.scss']
})
export class DebugCampoComponent implements OnInit {

  @Input() campoFilho;

  constructor() { }

  ngOnInit(): void {
  }

}
