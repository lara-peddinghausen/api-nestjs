// Define os dados para atualizar parcialmente um aluno, tornando opcionais os campos do CreateAlunoDto.

import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoDto } from './create-curso.dto.js';

export class UpdateCursoDto extends PartialType(CreateCursoDto){}