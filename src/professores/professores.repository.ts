import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfessoresRepository {  // Classe será responsável pelas operações relacionadas aos alunos no banco.
    constructor(
        private readonly prisma:  // ProfessoresRepository precisa do DatabaseService para executar SQL.
            PrismaService,
    ) { }

    async findAll() {
        return this.prisma.professor.findMany({
            orderBy: {
                id: 'asc',
            },
            include: {
                disciplinas: true,
            },
        });
    }

    async findById(id: number) {
        return this.prisma.professor.findUnique({
            where: {
                id,
            },
            include: {
                disciplinas: true,
            },
        });
    }

    async create(
        nome: string,
        disciplinaIds: number[]
    ) {
        return this.prisma.professor.create({
            data: {
                nome,
                disciplinas: {
                    connect: disciplinaIds.map(id => ({ id })),
                },
            },
            include: {
                disciplinas: true,
            },
        });
    }

    async update(
        id: number,
        nome?: string,  // opcional: pode não ser enviado
        disciplinaIds?: number[],  // opcional: pode não ser enviado
    ) {
        return this.prisma.professor.update({
            where: {
                id,
            },

            data: {
                nome,
                disciplinas: disciplinaIds !== undefined
                    ? {
                        set: disciplinaIds.map(id => ({ id })),  // set substitui os vínculos pela lista enviada. Se não enviar disciplinaIds, os vínculos permanecem; se enviar [], todos são removidos.
                    }
                    : undefined,
            },
            include: {  // Inclui os dados relacionados no resultado da consulta.
                disciplinas: true,
            },
        });
    }

    async delete(id: number) {
        return this.prisma.professor.delete({
            where: {
                id,
            },
        });
    }
}