import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, HttpCode, HttpStatus, Patch, Query } from '@nestjs/common';
import { ProfessoresService } from './professores.service.js';
import { CreateProfessorDto } from './dto/create-professor.dto.js';
import { UpdateProfessorDto } from './dto/update-professor.dto.js';

@Controller('professores')
export class ProfessoresController {
    constructor( // Injeção de dependência: o ProfessoresService é fornecido automaticamente pelo framework, permitindo que esta classe utilize seus métodos sem precisar criar manualmente uma instância do serviço.
        private readonly professoresService: ProfessoresService, // Não precisa instanciar. O nest faz isso automaticamente.
    ) { }

    @Get()
    findAll() {
        return this.professoresService.findAll();
    }

    @Get(':id')
    findById(
        @Param('id', ParseIntPipe)
        id: number,  // ParseIntPipe converte para inteiro.
    ) {
        return this.professoresService.findById(id);
    }

    @Post()
    create(
        @Body()
        data: CreateProfessorDto,  // Usa o DTO que define os dados e as regras de validação para criar um aluno.
    ) {
        return this.professoresService.create(data);
    }

    @Patch(':id')  // Atualiza parcialmente os dados do aluno.
    update(
        @Param('id', ParseIntPipe)
        id: number,

        @Body()
        data: UpdateProfessorDto,  // Usa o DTO que define os dados e as regras de validação para atualizar um aluno.
    ) {
        return this.professoresService.update(
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
        return this.professoresService.delete(id);
    }
}
