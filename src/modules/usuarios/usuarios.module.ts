import { Module } from '@nestjs/common';
import { UsuariosController } from './http/controllers/usuariosController';
import { UsuariosService } from './services/usuariosService';
import { IsNomeDeUsuarioUnicoConstraint } from './utils/is-nome-de-usuario-unico.validator';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService, IsNomeDeUsuarioUnicoConstraint],
})
export class UsuariosModule {}
