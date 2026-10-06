// Descreve como deve ser o formato do objeto que será recebido no corpo da requisição para atualizar um novo aluno

import { IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';

export class UpdateAlunoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  curso: string;
}