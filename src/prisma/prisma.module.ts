// Módulo responsável por gerenciar a dependência do Prisma Service.

import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service.js';

@Module({
  providers: [
    PrismaService,
  ],

  exports: [
    PrismaService,
  ],
})
export class PrismaModule {}
