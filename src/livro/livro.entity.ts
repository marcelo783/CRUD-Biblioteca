import { ApiProperty } from '@nestjs/swagger';

export class Livro {
  @ApiProperty({
    description: 'ID do livro',
    example: '60b6c0f9b4d2b938c4c8a5b3',
  })
  _id: string;

  @ApiProperty({
    description: 'Título do livro',
    example: '1984',
  })
  titulo: string;

  @ApiProperty({
    description: 'Autor do livro',
    example: 'George Orwell',
  })
  autor: string;

  @ApiProperty({
    description: 'Ano de publicação do livro',
    example: 1949,
  })
  ano: number;

  @ApiProperty({
    description: 'Disponibilidade do livro',
    example: true,
  })
  disponivel: boolean;
}
