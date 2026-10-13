import { IsNotEmpty, IsString, MaxLength, IsArray, IsInt, Min } from 'class-validator';

export class CreateProfessorDto {
  @IsString()  // precisa ser string
  @IsNotEmpty()  // não pode estar vazio
  @MaxLength(100)  // máximo de 100 caracteres
  nome: string;

  @IsArray()
  @IsInt({ each: true })
  @Min(1, { each: true })
  disciplinaIds: number[];
}