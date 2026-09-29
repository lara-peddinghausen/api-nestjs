import { Injectable } from '@nestjs/common';
import { ProfessoresRepository } from './professores.repository.js';

@Injectable()
export class ProfessoresService {
    constructor(
        private readonly professoresRepository:
            ProfessoresRepository,
    ) { }

    findAll() {
        return this.professoresRepository.findAll();
    }

    findById(id: number) {
        return this.professoresRepository.findById(id);
    }

    create(
        nome: string,
        disciplina: string,
    ) {
        return this.professoresRepository.create(
            nome,
            disciplina,
        );
    }

    async update(
        id: number,
        nome: string,
        disciplina: string,
    ) {
        await this.professoresRepository.update(
            id,
            nome,
            disciplina,
        );

        return this.professoresRepository.findById(id);
    }

    delete(id: number) {
        return this.professoresRepository.delete(id);
    }

}
