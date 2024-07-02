import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro } from './interfaces/livro.interface';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Injectable()
export class LivroService {
  constructor(@InjectModel('Livro') private readonly livroModel: Model<Livro>) {}

  async create(createLivroDto: CreateLivroDto): Promise<Livro> {
    const createdLivro = await this.livroModel.create(createLivroDto);
    return createdLivro;
  }

  async findAll(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async findOne(id: string): Promise<Livro> {
    const livro = await this.livroModel.findById(id).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return livro;
  }

  async update(id: string, updateLivroDto: UpdateLivroDto): Promise<Livro> {
    const livro = await this.livroModel.findByIdAndUpdate(id, updateLivroDto, { new: true }).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return livro;
  }

  async delete(id: string): Promise<Livro> {
    const livro = await this.livroModel.findByIdAndDelete(id).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return livro;
  }
}
