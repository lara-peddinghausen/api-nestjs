// Descreve como deve ser o formato do objeto que será recebido no corpo da requisição para criar um novo aluno

import { IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';

export class CreateAlunoDto {
  @IsString()  // precisa ser string
  @IsNotEmpty()  // não pode estar vazio
  @MaxLength(100)  // máximo de 100 caracteres
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  curso: string;
}