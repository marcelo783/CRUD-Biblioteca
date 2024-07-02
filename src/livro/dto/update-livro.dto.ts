import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLivroDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Título do livro',
    example: 'Animal Farm',
    required: false
  })
  readonly titulo?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Autor do livro',
    example: 'George Orwell',
    required: false
  })
  readonly autor?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Ano de publicação do livro',
    example: 1945,
    required: false
  })
  readonly ano?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Disponibilidade do livro',
    example: false,
    required: false
  })
  readonly disponivel?: boolean;
}
