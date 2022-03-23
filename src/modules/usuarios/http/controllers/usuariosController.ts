import { Body, Controller, Post } from "@nestjs/common";
import { UsuariosService } from "../../services/usuariosService";

@Controller('users')
export class UsuariosController {
    private usuarioService = new UsuariosService();

    @Post()
    public criar(@Body() usuario) {
        const usuarioCriado = this.usuarioService.criar(usuario);
        return usuarioCriado;
    }
}
