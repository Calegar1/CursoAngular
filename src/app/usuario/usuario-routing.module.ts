import { UsuarioListComponent } from './../usuarios/usuario-list/usuario-list.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';


const routes: Routes = [
  { path: '', component: UsuarioListComponent, canActivate: [AuthGuardService] },  
  {path: 'new', component:UsuarioFormComponent} , 
  {path: 'edit/:id', component:UsuarioFormComponent} , 
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'data-form', component: DataFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
