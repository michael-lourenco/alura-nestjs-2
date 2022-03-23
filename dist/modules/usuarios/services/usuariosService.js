"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
class UsuariosService {
    constructor() {
        this.usuarios = [];
    }
    criar(usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
}
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuariosService.js.map