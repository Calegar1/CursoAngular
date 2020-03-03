import { MusicasService } from './../musicas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-musicas-form',
  templateUrl: './musicas-form.component.html',
  styleUrls: ['./musicas-form.component.css']
})
export class MusicasFormComponent implements OnInit {
  titulo : any ='Cadastrar Música';
  textoBotao : any = "Cadastrar";
  classbtn   : any = "btn btn-outline-info";
  addMusica: FormGroup;
  isEdicao = false;
  idUsuario = 0;
  user: any = [];
  isHabilitado = true;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private router: Router,  private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private MusicasService: MusicasService,
    private enderecoService: UsuarioService
    ) { }


    ngOnInit(): void {
    
  this.addMusica = this.formBuilder.group({
    nomeInput: ['', []],
    compositorInput: ['', []],
    iframeInput: ['', []],
  });


}
onSubmit(){
    console.log(this.addMusica);

    let obj = {
      nome: this.addMusica.value.nomeInput,
      compositor: this.addMusica.value.compositorInput,
      iframe: this.addMusica.value.iframeInput,
    }
       if (this.isEdicao == false){
        this.enderecoService.postDados2(obj).subscribe(
          (response: any) => {
            console.log(response);
            this.toastr.success
              ("Musica inserida com sucesso : " + response.id);
            this.router.navigate(['/musicas']);
    
          },
          (error) => { }
        );
      }
      else{
        this.usuarioService.updateUsuario (this.idUsuario, obj).subscribe(
          (response: any) => {
            this.toastr.success
              ("Musica alterado com sucesso : " + response.id);
            this.router.navigate(['/musicas']);
          }
        );
      }
  }}
