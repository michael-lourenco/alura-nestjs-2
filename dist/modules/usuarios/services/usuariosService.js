"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    constructor() {
        this.usuarios = [{
                id: 1,
                nomeDeUsuario: "usuario1",
                email: "teste@teste",
                senha: "senha1",
                nomeCompleto: "Usuario 1",
                dataDeEntrada: new Date()
            }];
    }
    buscaPorNomeDeUsuario(nomeDeUsuario) {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }
    criar(usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
};
UsuariosService = __decorate([
    common_1.Injectable()
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuariosService.js.map