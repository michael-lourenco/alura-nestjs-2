"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const common_1 = require("@nestjs/common");
const usuariosController_1 = require("./http/controllers/usuariosController");
const usuariosService_1 = require("./services/usuariosService");
const is_nome_de_usuario_unico_validator_1 = require("./utils/is-nome-de-usuario-unico.validator");
let UsuariosModule = class UsuariosModule {
};
UsuariosModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [usuariosController_1.UsuariosController],
        providers: [usuariosService_1.UsuariosService, is_nome_de_usuario_unico_validator_1.IsNomeDeUsuarioUnicoConstraint],
    })
], UsuariosModule);
exports.UsuariosModule = UsuariosModule;
//# sourceMappingURL=usuarios.module.js.map