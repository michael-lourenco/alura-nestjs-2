import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { Usuario } from "../../domain/usuarioEntity";
import { UsuariosService } from "../../services/usuariosService";

@Controller('users')
export class UsuariosController {
    constructor(private usuarioService: UsuariosService) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        return usuarioEncontrado;
    }

    @Post()
    public criar(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.criar(usuario);
        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({'Location': `/users/${usuarioCriado.nomeDeUsuario}`})
            .comBody(usuarioCriado)
            .build();
    }
}
