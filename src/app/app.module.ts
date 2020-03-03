import { ProdutosModule } from './produtos/produtos.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { LoginComponent } from './login/login.component';
import { QueenListComponent } from './home/queen-list/queen-list.component';
import { ArcticListComponent } from './home/arctic-list/arctic-list.component';
import { IlluminersListComponent } from './home/illuminers-list/illuminers-list.component';
import { MusicasListComponent } from './musicas/musicas-list/musicas-list.component';
import { MusicasFormComponent } from './musicas/musicas-form/musicas-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    MenuComponent,
    HomeComponent,
    UsuarioListComponent,
    LoginComponent,
    QueenListComponent,
    ArcticListComponent,
    IlluminersListComponent,
    MusicasListComponent,
    MusicasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // UsuarioModule,
    HttpClientModule,
    PokemonModule,
    ProdutosModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
