// Responsável por lidar com as requisições HTTP de alunos. Define os endpoints relacionados a alunos.
// Controllers devem se concentrar principalmente em receber requisições HTTP e encaminhar o trabalho para outros componentes.
// Controlador chama um serviço

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';

@Controller('alunos') // @Controller define o prefixo das rotas.
export class AlunosController {
    constructor( // Injeção de dependência: o AlunosService é fornecido automaticamente pelo framework, permitindo que esta classe utilize seus métodos sem precisar criar manualmente uma instância do serviço.
        private readonly alunosService:
            AlunosService,
    ) { }

    @Get()
    findAll() {
        return this.alunosService.findAll();
    }

    @Get(':id')
    findById(
        @Param('id', ParseIntPipe)
        id: number,  // ParseIntPipe converte para inteiro.
    ) {
        return this.alunosService.findById(id);
    }

    @Post()
    create(
        @Body()
        body: {
            nome: string;
            email: string;
            curso: string;
        },
    ) {
        return this.alunosService.create(
            body.nome,
            body.email,
            body.curso,
        );
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe)
        id: number,

        @Body()
        body: {
            nome: string;
            email: string;
            curso: string;
        },
    ) {
        return this.alunosService.update(
            id,
            body.nome,
            body.email,
            body.curso,
        );
    }

    @Delete(':id')
    delete(
        @Param('id', ParseIntPipe)
        id: number,
    ) {
        return this.alunosService.delete(id);
    }
}
