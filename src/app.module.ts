// Representa os módulos do sistema, que são unidades de código que encapsulam funcionalidades relacionadas. Cada módulo pode conter controladores, provedores e outros módulos. O AppModule é o módulo raiz da aplicação NestJS, responsável por importar e organizar os demais módulos e componentes.

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AlunosModule } from './alunos/alunos.module.js';
import { ProfessoresModule } from './professores/professores.module.js';
import { DatabaseModule } from './database/database.module.js';
import { DisciplinaModule } from './disciplinas/disciplinas.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Faz com que a configuração possa ser utilizada nos demais módulos sem precisar importar ConfigModule em cada um deles.
    }),

    AlunosModule,

    ProfessoresModule,

    DisciplinaModule,

    DatabaseModule,

    PrismaModule,
  ],
})
export class AppModule {}
