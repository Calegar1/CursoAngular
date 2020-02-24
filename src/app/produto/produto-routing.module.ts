import { ProdutosComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListComponent } from '../produtos/produtos-list/produtos-list.component';


const routes: Routes = [
  {path : 'produtos', component : ProdutosComponent},
  {path: 'list', component: ProdutosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
