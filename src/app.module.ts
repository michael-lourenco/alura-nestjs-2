import { Module } from '@nestjs/common';
import { UsuariosController } from './modules/usuarios/http/controllers/usuariosController';
import { UsuariosService } from './modules/usuarios/services/usuariosService';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class AppModule {}
