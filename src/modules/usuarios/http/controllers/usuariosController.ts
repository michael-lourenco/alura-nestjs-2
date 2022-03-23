import { Body, Controller, Post } from "@nestjs/common";
import { Usuario } from "../../domain/usuarioEntity";
import { UsuariosService } from "../../services/usuariosService";

@Controller('users')
export class UsuariosController {
    constructor(private usuarioService: UsuariosService) {}

    @Post()
    public criar(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.criar(usuario);
        return usuarioCriado;
    }
}
