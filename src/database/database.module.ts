import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service.js';

@Module({
  providers: [DatabaseService],  // Registra o provider neste módulo.
  exports: [DatabaseService],  // Permite que módulos que importarem DatabaseModule utilizem DatabaseService.
})
export class DatabaseModule {}
