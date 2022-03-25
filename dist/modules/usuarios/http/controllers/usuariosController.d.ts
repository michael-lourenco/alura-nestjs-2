import { NestResponse } from "src/core/http/nest-response";
import { Usuario } from "../../domain/usuarioEntity";
import { UsuariosService } from "../../services/usuariosService";
export declare class UsuariosController {
    private usuarioService;
    constructor(usuarioService: UsuariosService);
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
    criar(usuario: Usuario): NestResponse;
}
