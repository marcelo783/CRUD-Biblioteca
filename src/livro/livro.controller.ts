import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './livro.entity';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('livros')
@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Cadastrar um novo livro' })
  @ApiResponse({ status: 201, description: 'Livro cadastrado com sucesso.', type: Livro })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createLivroDto: CreateLivroDto) {
    const livro = await this.livroService.create(createLivroDto);
    return {
      message: 'Livro cadastrado',
      data: livro,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os livros' })
  @ApiResponse({ status: 200, description: 'Lista de livros retornada com sucesso.', type: [Livro] })
  async findAll() {
    const livros = await this.livroService.findAll();
    return {
      message: 'Lista de livros',
      data: livros,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um livro' })
  @ApiResponse({ status: 200, description: 'Detalhes do livro retornados com sucesso.', type: Livro })
  @ApiResponse({ status: 404, description: 'Livro não encontrado.' })
  async findOne(@Param('id') id: string) {
    const livro = await this.livroService.findOne(id);
    return {
      data: livro,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um livro' })
  @ApiResponse({ status: 200, description: 'Livro atualizado com sucesso.', type: Livro })
  @ApiResponse({ status: 404, description: 'Livro não encontrado.' })
  async update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    const livro = await this.livroService.update(id, updateLivroDto);
    return {
      message: 'Livro atualizado',
      data: livro,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Excluir um livro' })
  @ApiResponse({ status: 204, description: 'Livro excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Livro não encontrado.' })
  async delete(@Param('id') id: string) {
    await this.livroService.delete(id);
    return {
      message: 'Livro excluído',
    };
  }
}
