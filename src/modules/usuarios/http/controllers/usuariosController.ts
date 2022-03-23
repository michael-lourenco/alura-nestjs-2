import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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
    public criar(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.criar(usuario);
        return usuarioCriado;
    }
}
