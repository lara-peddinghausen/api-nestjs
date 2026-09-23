// Inicia o nest e roda o servidor

import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() { // Inicializa o NestFactory
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  await app.listen(process.env.PORT ?? 3000); // Servidor roda na porta 3000
}
await bootstrap();
