import { Injectable } from "@nestjs/common";
import { Usuario } from "../domain/usuarioEntity";

@Injectable()
export class UsuariosService {
    private usuarios = [{
        id:1,
        nomeDeUsuario: "usuario1",
        email: "teste@teste",
        senha: "senha1",
        nomeCompleto: "Usuario 1",
        dataDeEntrada: new Date()
    }];

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }

    public criar(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }
}
