// Serviço responsável por criar e gerenciar a conexão do Prisma com o banco de dados dentro da aplicação NestJS.

import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  PrismaMariaDb,
} from '@prisma/adapter-mariadb';

import {
  PrismaClient,
} from '../generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient  // Isso significa que o PrismaService herda as operações fornecidas pelo Prisma Client. Por isso podemos fazer: this.prisma.aluno.findMany()
  implements OnModuleDestroy
{
  constructor(
    configService: ConfigService,
  ) {
    const adapter =  // Responsável por fazer a comunicação entre o Prisma e o MySQL/MariaDB.
      new PrismaMariaDb({
        host:
          configService.getOrThrow<string>(
            'DB_HOST',
          ),

        port:
          configService.get<number>(
            'DB_PORT',
            3306,
          ),

        user:
          configService.getOrThrow<string>(
            'DB_USER',
          ),

        password:
          configService.getOrThrow<string>(
            'DB_PASSWORD',
          ),

        database:
          configService.getOrThrow<string>(
            'DB_NAME',
          ),

        connectionLimit: 10,
      });

    super({
      adapter,
    });
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Encerra a conexão do Prisma com o banco de dados, liberando os recursos utilizados.
  }
}
