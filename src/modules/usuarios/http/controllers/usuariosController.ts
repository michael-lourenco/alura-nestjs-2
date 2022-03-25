import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../../../../core/http/nest-response";
import { NestResponseBuilder } from "../../../../core/http/nest-response-builder";
import { Usuario } from "../../domain/usuarioEntity";
import { UsuariosService } from "../../services/usuariosService";

@Controller('users')
export class UsuariosController {
    constructor(private usuarioService: UsuariosService) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        if(!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: `Usuário ${nomeDeUsuario} não encontrado`
            });
        }
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
