import { Injectable, NotFoundException } from '@nestjs/common';
import { CursosRepository } from './cursos.repository.js';
import { CreateCursoDto } from './dto/create-curso.dto.js';
import { UpdateCursoDto } from './dto/update-curso.dto.js';

@Injectable()
export class CursosService {
  constructor(
    private readonly cursosRepository:
      CursosRepository,
  ) { }

  findAll() {
    return this.cursosRepository.findAll();
  }

  async findById(id: number) {
    const aluno =
      await this.cursosRepository.findById(
        id,
      );

    if (!aluno) {
      throw new NotFoundException(  // O Nest converte essa exception para uma resposta HTTP apropriada.
        'Aluno não encontrado',
      );
    }

    return aluno;
  }

  create(data: CreateCursoDto) {
    return this.cursosRepository.create(
      data.nome
    );
  }

  async update(
    id: number,
    data: UpdateCursoDto,
  ) {
    const aluno = await this.findById(id);

    return this.cursosRepository.update(
      id,
      data.nome ?? aluno.nome
    );
  }

  async delete(id: number) {
    await this.findById(id);

    await this.cursosRepository.delete(id);
  }
}
