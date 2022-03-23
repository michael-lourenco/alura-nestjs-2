import { Module } from '@nestjs/common';
import { UsuariosController } from './http/controllers/usuariosController';
import { UsuariosService } from './services/usuariosService';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
