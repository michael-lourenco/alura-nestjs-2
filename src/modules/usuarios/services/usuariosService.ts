export class UsuariosService {
    private usuarios = [];

    public criar(usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
}