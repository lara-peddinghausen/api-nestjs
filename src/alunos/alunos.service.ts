// Contém lógicas de negócios relacionadas a alunos. 

import { Injectable } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository.js';

@Injectable() // indica que essa classe pode participar do sistema de injeção de dependência do Nest.
export class AlunosService {
  constructor(
    private readonly alunosRepository:
      AlunosRepository,
  ) { }

  findAll() {
    return this.alunosRepository.findAll();
  }

  findById(id: number) {
    return this.alunosRepository.findById(id);
  }

  create(
    nome: string,
    curso: string,
  ) {
    return this.alunosRepository.create(
      nome,
      curso,
    );
  }

  async update(
    id: number,
    nome: string,
    curso: string,
  ) {
    await this.alunosRepository.update(
      id,
      nome,
      curso,
    );

    return this.alunosRepository.findById(id);
  }

  delete(id: number) {
    return this.alunosRepository.delete(id);
  }
}
