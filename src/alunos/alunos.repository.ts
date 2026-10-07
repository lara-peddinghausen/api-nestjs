import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AlunosRepository {
  constructor(
    private readonly prisma:
      PrismaService,
  ) {}

  findAll() {
    return this.prisma.aluno.findMany({  // Conceitualmente semelhante a: SELECT * FROM alunos;
      orderBy: {
        id: 'asc',
      },
    });
  }

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
    curso: string,
  ) {
    return this.prisma.aluno.create({
      data: {  // Dados que serão persistidos
        nome,
        email,
        curso,
      },
    });
  }

  update(
    id: number,
    nome: string,
    email: string,
    curso: string,
  ) {
    return this.prisma.aluno.update({
      where: {
        id,
      },

      data: {
        nome,
        email,
        curso,
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
}