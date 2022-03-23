import { Usuario } from "../../domain/usuarioEntity";
import { UsuariosService } from "../../services/usuariosService";
export declare class UsuariosController {
    private usuarioService;
    constructor(usuarioService: UsuariosService);
    criar(usuario: Usuario): Usuario;
}
