import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';


const routes: Routes = [
  {path : 'produtos', component : ProdutosComponent},
  {path: 'produtos/list', component: ProdutosListComponent},
  {path: 'produtos/edit/:id', component:ProdutosComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
