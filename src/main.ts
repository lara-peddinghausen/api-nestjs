// Inicia o nest e roda o servidor

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule); // NestJS cria a aplicação a partir do AppModule (módulo principal da aplicação)

  app.enableShutdownHooks();  // Permite que o NestJS reaja aos sinais de encerramento do processo e execute os hooks de ciclo de vida.

  const configService = // Pedindo ao NestJS uma instância de ConfigService. Permite acessar variáveis de ambiente.
    app.get(ConfigService);

  const port =
    configService.get<number>(
      'PORT',
      3000,
    );

  await app.listen(port);
}

bootstrap();
