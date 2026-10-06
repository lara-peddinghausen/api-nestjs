// Define os dados para atualizar parcialmente um aluno, tornando opcionais os campos do CreateAlunoDto.

import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoDto } from './create-aluno.dto.js';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto){}