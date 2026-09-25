import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from '@nestjs/common';
import { ProfessoresService } from './professores.service.js';

@Controller('professores')
export class ProfessoresController {
    constructor( // Injeção de dependência: o ProfessoresService é fornecido automaticamente pelo framework, permitindo que esta classe utilize seus métodos sem precisar criar manualmente uma instância do serviço.
        private readonly professoresService: ProfessoresService, // Não precisa instanciar. O nest faz isso automaticamente.
    ) { }

    @Get()
    listar() {
        return this.professoresService.findAll();
    }

    @Get(':id')
    findById(
        @Param('id', ParseIntPipe) id: number,  // ParseIntPipe converte para inteiro.
    ) {
        return this.professoresService.findById(id);
    }

    @Post()
    create(
        @Body() body: {
            nome: string;
            disciplina: string;
        },
    ) {
        return this.professoresService.create(
            body.nome,
            body.disciplina
        )
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: {
            nome: string,
            disciplina: string;
        },
    ) {
        return this.professoresService.update(
            id,
            body.nome,
            body.disciplina
        );
    }

    @Delete(':id')
    delete(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.professoresService.delete(id);
    }
}
