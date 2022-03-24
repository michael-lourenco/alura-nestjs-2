import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsuariosService } from "../services/usuariosService";
export declare class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    validate(nomeDeUsuario: string, validatonArguments?: ValidationArguments): boolean | Promise<boolean>;
}
export declare function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
