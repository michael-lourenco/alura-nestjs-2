"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNomeDeUsuarioUnico = exports.IsNomeDeUsuarioUnicoConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const usuariosService_1 = require("../services/usuariosService");
let IsNomeDeUsuarioUnicoConstraint = class IsNomeDeUsuarioUnicoConstraint {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    validate(nomeDeUsuario, validatonArguments) {
        return !!!this.usuariosService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }
};
IsNomeDeUsuarioUnicoConstraint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __metadata("design:paramtypes", [usuariosService_1.UsuariosService])
], IsNomeDeUsuarioUnicoConstraint);
exports.IsNomeDeUsuarioUnicoConstraint = IsNomeDeUsuarioUnicoConstraint;
function IsNomeDeUsuarioUnico(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeUsuarioUnicoConstraint,
        });
    };
}
exports.IsNomeDeUsuarioUnico = IsNomeDeUsuarioUnico;
//# sourceMappingURL=is-nome-de-usuario-unico.validator.js.map