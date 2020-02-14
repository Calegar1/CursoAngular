import { PokemonListComponent } from './usuario/pokemon-list/pokemon-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
{path: 'usuarios', component : UsuarioFormComponent},
{path: 'pokemons', component : PokemonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
