// Descreve como deve ser o formato do objeto que será recebido no corpo da requisição para criar um novo aluno

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;
}