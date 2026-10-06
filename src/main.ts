// Inicia o nest e roda o servidor

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule); // NestJS cria a aplicação a partir do AppModule (módulo principal da aplicação)

  app.enableShutdownHooks();  // Permite que o NestJS reaja aos sinais de encerramento do processo e execute os hooks de ciclo de vida.

  app.useGlobalPipes(  // Aplica a validação global dos dados recebidos nas requisições.
    new ValidationPipe({
      whitelist: true,  // Remove propriedades sem decoradores de validação no DTO.
      transform: true,  // Transforma os dados recebidos em instâncias dos DTOs.
    }),
  );

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
