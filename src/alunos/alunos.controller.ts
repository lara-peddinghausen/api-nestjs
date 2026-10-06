// Responsável por lidar com as requisições HTTP de alunos. Define os endpoints relacionados a alunos.
// Controllers devem se concentrar principalmente em receber requisições HTTP e encaminhar o trabalho para outros componentes.
// Controlador chama um serviço

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, HttpCode, HttpStatus, } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';

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
        data: CreateAlunoDto,  // Usa o DTO que define os dados e as regras de validação para criar um aluno.
    ) {
        return this.alunosService.create(data);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe)
        id: number,

        @Body()
        data: UpdateAlunoDto,  // Usa o DTO que define os dados e as regras de validação para atualizar um aluno.
    ) {
        return this.alunosService.update(
            id,
            data,
        );
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)  // Retorna status 204, sem corpo na resposta.
    async delete(
        @Param('id', ParseIntPipe)
        id: number,
    ) {
        return this.alunosService.delete(id);
    }
}
