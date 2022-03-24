import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosService } from "../services/usuariosService";

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuariosService: UsuariosService) {}
    
    validate(nomeDeUsuario: string, validatonArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuariosService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeUsuarioUnicoConstraint,
        });
    };
}
