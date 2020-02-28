import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicasListComponent } from './musicas/musicas-list/musicas-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'musicas', component: MusicasListComponent, canActivate: [AuthGuardService] },
  {path : 'usuarios',
  loadChildren : () => import('./usuario/usuario.module')
    .then(m => m.UsuarioModule),    canActivate: [AuthGuardService]
  },
  {path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module')
      .then(m => m.ProdutosModule),    canActivate: [AuthGuardService]},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    canActivate: [AuthGuardService]
  },
  {path: 'pokemons',
  loadChildren: () => import('./pokemon/pokemon.module')
    .then(m => m.PokemonModule), canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
