import { SafeResourceUrl } from '@angular/platform-browser';

export class UsuarioModel{
        id : number;
        nome: string;
        senha: string;
        tipo_usuario: number;
        email: string;
        logradouro: string;
        numero: string;
        complemento: string;
        cep: string;
        bairro: string;
        estado: string;
        cidade: string;
        compositor: string;
        iframe: string;
        produtos: string;
        urlSafe: SafeResourceUrl;
}
