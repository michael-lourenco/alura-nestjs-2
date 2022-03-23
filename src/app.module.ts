import { Module } from '@nestjs/common';
import { UsuariosController } from './modules/usuarios/http/controllers/usuariosController';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [],
})
export class AppModule {}
