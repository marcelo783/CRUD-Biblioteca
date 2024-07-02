import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLivroDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Título do livro',
    example: '1984'
  })
  readonly titulo: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Autor do livro',
    example: 'George Orwell'
  })
  readonly autor: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Ano de publicação do livro',
    example: 1949
  })
  readonly ano: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Disponibilidade do livro',
    example: true,
    required: false
  })
  readonly disponivel?: boolean;
}
