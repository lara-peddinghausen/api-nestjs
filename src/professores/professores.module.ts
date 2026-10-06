import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module.js';
import { ProfessoresController } from './professores.controller.js';
import { ProfessoresService } from './professores.service.js';
import { ProfessoresRepository } from './professores.repository.js';


@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    ProfessoresController,
  ],

  providers: [
    ProfessoresService,
    ProfessoresRepository,
  ],
})
export class ProfessoresModule {}

