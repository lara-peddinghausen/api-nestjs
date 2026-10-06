// Contém lógicas de negócios relacionadas a alunos. 

import { Injectable, NotFoundException } from '@nestjs/common';
import { DisciplinasRepository } from './disciplinas.repository.js';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto.js';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto.js';


@Injectable() // indica que essa classe pode participar do sistema de injeção de dependência do Nest.
export class DisciplinasService {
  constructor(
    private readonly disciplinasRepository:
      DisciplinasRepository,
  ) { }

  findAll() {
    return this.disciplinasRepository.findAll();
  }

  async findById(id: number) {
    const disciplina =
      await this.disciplinasRepository.findById(
        id,
      );

    if (!disciplina) {
      throw new NotFoundException(  // O Nest converte essa exception para uma resposta HTTP apropriada.
        'Disciplina não encontrada',
      );
    }

    return disciplina;
  }

  create(data: CreateDisciplinaDto) {
    return this.disciplinasRepository.create(
      data.nome,
      data.carga_horaria
    );
  }

  async update(
    id: number,
    data: UpdateDisciplinaDto,
  ) {
     const disciplina = await this.findById(id);

    await this.disciplinasRepository.update(
      id,
      data.nome !== undefined ? data.nome : disciplina.nome,
      data.carga_horaria !== undefined ? data.carga_horaria : disciplina.carga_horaria
    );

    return this.findById(id);
  }

  async delete(id: number) {
    await this.findById(id);

    await this.disciplinasRepository.delete(id);
  }
}
