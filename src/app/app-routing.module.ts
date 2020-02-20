import { AuthGuardService } from './shared/guards/auth-guard.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:  ' ', component : HomeComponent },
  {path: 'home' , component : HomeComponent},
  {path: 'home' , component : HomeComponent},
  {path : 'usuarios',
  loadChildren : () => import('./usuario/usuario.module')
    .then(m => m.UsuarioModule)},
  {path : 'admin', loadChildren : () => import('./admin/admin.module')
  .then(m => m.AdminModule),
  canActivate : [AuthGuardService]
} 
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
