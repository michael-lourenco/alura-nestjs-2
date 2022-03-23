import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')
export class UsuariosController {
    private usuarios = [];

    @Post()
    public criar(@Body() usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
}
