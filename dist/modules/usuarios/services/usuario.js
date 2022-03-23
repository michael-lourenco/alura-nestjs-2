"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
class UsuarioService {
    constructor() {
        this.usuarios = [];
    }
    criar(usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.js.map