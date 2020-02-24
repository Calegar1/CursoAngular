import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';


const routes: Routes = [
    {path : '', component : ProdutosComponent},
    {path: 'list', component: ProdutosListComponent,   canActivate: [AuthGuardService]},
    {path: 'edit/:id', component:ProdutosComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
