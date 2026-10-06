import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service.js';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto.js';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto.js';

@Controller('disciplinas') // @Controller define o prefixo das rotas.
export class DisciplinasController {
    constructor(
        private readonly disciplinasService:
            DisciplinasService,
    ) { }

    @Get()
    findAll() {
        return this.disciplinasService.findAll();
    }

    @Get(':id')
    findById(
        @Param('id', ParseIntPipe)
        id: number,  // ParseIntPipe converte para inteiro.
    ) {
        return this.disciplinasService.findById(id);
    }

    @Post()
    create(
        @Body()
        data: CreateDisciplinaDto,  
    ) {
        return this.disciplinasService.create(data);
    }

    @Patch(':id') 
    update(
        @Param('id', ParseIntPipe)
        id: number,

        @Body()
        data: UpdateDisciplinaDto, 
    ) {
        return this.disciplinasService.update(
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
        return this.disciplinasService.delete(id);
    }
}
