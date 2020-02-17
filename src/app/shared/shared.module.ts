import { DebugFormComponent } from './messages/debug-form/debug-form.component';
import { DebugCampoComponent } from './messages/debug-campo/debug-campo.component';
import { ShowErrosComponent } from './messages/show-erros/show-erros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [  
    ShowErrosComponent,
    DebugCampoComponent,
    DebugFormComponent
  ],
  imports: [
    CommonModule
  
  
  ],
  exports:[
    ShowErrosComponent,
    DebugCampoComponent,
    DebugFormComponent
  ],
})
export class SharedModule { }
