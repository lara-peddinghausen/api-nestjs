import { IsNotEmpty, IsString, MaxLength, IsInt } from 'class-validator';

export class CreateDisciplinaDto {
  @IsString()  // precisa ser string
  @IsNotEmpty()  // não pode estar vazio
  @MaxLength(100)  // máximo de 100 caracteres
  nome: string;

  @IsInt()
  @IsNotEmpty()
  carga_horaria: number;
}