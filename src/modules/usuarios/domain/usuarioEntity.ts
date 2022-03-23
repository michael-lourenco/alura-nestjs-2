import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "../utils/is-nome-de-usuario-unico.validator";

export class Usuario {
    id: number;
    
    @IsNomeDeUsuarioUnico({
        message: "Nome de usuário já existe"
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    nomeDeUsuario: string;
 
    @IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.'
    })
    email: string;
 
    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;
 
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    nomeCompleto: string;
 
    dataDeEntrada: Date;
 }
