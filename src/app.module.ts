// Representa os módulos do sistema, que são unidades de código que encapsulam funcionalidades relacionadas. Cada módulo pode conter controladores, provedores e outros módulos. O AppModule é o módulo raiz da aplicação NestJS, responsável por importar e organizar os demais módulos e componentes.

import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlunosModule } from './alunos/alunos.module.js';
import { ProfessoresModule } from './professores/professores.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({ // Decorator já tem funcionalidades definifas. @Module informa ao Nest que essa classe representa um módulo. Um módulo ajuda a agrupar componentes relacionados.
  imports: [   //  Módulos utilizados por este módulo
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'api-aluno',
    }), AlunosModule, ProfessoresModule, // Quando crio um novo módulo, a CLI deverá adicionar automaticamente o módulo ao AppModule.
  ],
  controllers: [AppController], // Controladores pertencentes ao módulo
  providers: [AppService],  // Serviços e outros providers
})
export class AppModule {}
