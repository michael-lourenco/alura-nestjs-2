import { Injectable } from "@nestjs/common";
import { Usuario } from "../domain/usuarioEntity";

@Injectable()
export class UsuariosService {
    private usuarios = [];

    public criar(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }
}
