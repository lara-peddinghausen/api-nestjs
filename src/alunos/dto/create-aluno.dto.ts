// Descreve como deve ser o formato do objeto que será recebido no corpo da requisição para criar um novo aluno

import { IsNotEmpty, IsString, MaxLength, IsEmail, IsInt, Min } from 'class-validator';

export class CreateAlunoDto {
  @IsString()  // precisa ser string
  @IsNotEmpty()  // não pode estar vazio
  @MaxLength(100)  // máximo de 100 caracteres
  nome: string;

  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsInt()
  @Min(1)
  cursoId: number;
}