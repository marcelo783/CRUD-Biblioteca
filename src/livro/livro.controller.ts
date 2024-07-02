import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './interfaces/livro.interface';

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createLivroDto: CreateLivroDto) {
    const livro = await this.livroService.create(createLivroDto);
    return {
      message: 'Livro cadastrado',
      data: livro
    };
  }

  @Get()
  async findAll() {
    const livros = await this.livroService.findAll();
    return {
      message: 'Lista de livros',
      data: livros
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const livro = await this.livroService.findOne(id);
    return {
      data: livro
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    const livro = await this.livroService.update(id, updateLivroDto);
    return {
      message: 'Livro atualizado',
      data: livro
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.livroService.delete(id);
    return {
      message: 'Livro excluído'
    };
  }
}
