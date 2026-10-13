import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AlunosRepository {
  constructor(
    private readonly prisma:
      PrismaService,
  ) { }

  // findAll() {
  //   return this.prisma.aluno.findMany({  // Conceitualmente semelhante a: SELECT * FROM alunos;
  //     orderBy: {
  //       id: 'asc',
  //     },
  //   });
  // }

  findById(id: number) {
    return this.prisma.aluno.findUnique({  // Procura registros através de valores que identificam unicamente um registro
      where: {
        id,
      },
    });
  }

  create(
    nome: string,
    email: string,
    cursoId: number,
  ) {
    return this.prisma.aluno.create({
      data: {  // Dados que serão persistidos
        nome,
        email,
        cursoId,
      },
    });
  }

  update(
    id: number,
    nome: string,
    email: string,
    cursoId: number,
  ) {
    return this.prisma.aluno.update({
      where: {
        id,
      },

      data: {
        nome,
        email,
        cursoId,
      },
    });
  }

  delete(id: number) {
    return this.prisma.aluno.delete({
      where: {
        id,
      },
    });
  }

  async findAll(curso?: string) {
    return this.prisma.aluno.findMany({
      where: {
        curso: curso
          ? { is: { nome: curso } }
          : undefined,
      },
      include: {  // Inclui os dados relacionados no resultado da consulta.
        curso: true,
      },
    });
  }

  // async findAll(nome?: string) {
  //   return this.prisma.aluno.findMany({
  //     where: {
  //       nome: {
  //         contains: nome,
  //       },
  //     },
  //   });
  // }

  // async findAll(page: number, limit: number) {
  //   const skip = (page - 1) * limit;

  //   return this.prisma.aluno.findMany({
  //     skip,
  //     take: limit,
  //     include: {
  //       curso: true,
  //     },
  //   });
  // }
}