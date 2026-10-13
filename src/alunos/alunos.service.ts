// Contém lógicas de negócios relacionadas a alunos. 

import { Injectable, NotFoundException } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';

@Injectable() // indica que essa classe pode participar do sistema de injeção de dependência do Nest.
export class AlunosService {
  constructor(
    private readonly alunosRepository:
      AlunosRepository,
  ) { }

  // findAll() {
  //   return this.alunosRepository.findAll();
  // }

  async findById(id: number) {
    const aluno =
      await this.alunosRepository.findById(
        id,
      );

    if (!aluno) {
      throw new NotFoundException(  // O Nest converte essa exception para uma resposta HTTP apropriada.
        'Aluno não encontrado',
      );
    }

    return aluno;
  }

  create(data: CreateAlunoDto) {
    return this.alunosRepository.create(
      data.nome,
      data.email,
      data.cursoId,
    );
  }

  async update(
    id: number,
    data: UpdateAlunoDto,
  ) {
    const aluno = await this.findById(id);

    return this.alunosRepository.update(
      id,
      data.nome ?? aluno.nome,
      data.email ?? aluno.email,
      data.cursoId ?? aluno.cursoId,
    );
  }

  async delete(id: number) {
    await this.findById(id);

    await this.alunosRepository.delete(id);
  }

  async findAll(curso?: string) {
    return this.alunosRepository.findAll(curso);
  }

  // async findAll(nome?: string) {
  //   return this.alunosRepository.findAll(nome);
  // }

  // async findAll(page: number, limit: number) {
  //   return this.alunosRepository.findAll(page, limit);
  // }
}
