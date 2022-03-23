import { Usuario } from "../domain/usuarioEntity";
export declare class UsuariosService {
    private usuarios;
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
    criar(usuario: Usuario): Usuario;
}
