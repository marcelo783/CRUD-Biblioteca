import { Test, TestingModule } from '@nestjs/testing';
import { LivroService } from '../livro/livro.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro } from '../livro/interfaces/livro.interface';
import { NotFoundException } from '@nestjs/common';

// Dados de teste para simulação
const mockLivro = {
  _id: '1',
  titulo: '1984',
  autor: 'George Orwell',
  ano: 1949,
  disponivel: true,
};

// Simulação do modelo do Mongoose
const mockLivroModel = {
  new: jest.fn((data) => ({
    ...data,
    save: jest.fn().mockResolvedValue(mockLivro),
  })),
  create: jest.fn().mockResolvedValue(mockLivro),
  find: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([mockLivro]),
  }),
  findById: jest.fn((id) => ({
    exec: jest.fn().mockResolvedValue(id === '1' ? mockLivro : null),
  })),
  findByIdAndUpdate: jest.fn((id, data) => ({
    exec: jest.fn().mockResolvedValue(data),
  })),
  findByIdAndDelete: jest.fn((id) => ({
    exec: jest.fn().mockResolvedValue(id === '1' ? mockLivro : null),
  })),
};

describe('LivroService', () => {
  let service: LivroService;
  let model: Model<Livro>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LivroService,
        {
          provide: getModelToken('Livro'),
          useValue: mockLivroModel,
        },
      ],
    }).compile();

    service = module.get<LivroService>(LivroService);
    model = module.get<Model<Livro>>(getModelToken('Livro'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new livro', async () => {
    const createLivroDto = {
      titulo: '1984',
      autor: 'George Orwell',
      ano: 1949,
      disponivel: true,
    };

    const newLivro = await service.create(createLivroDto);
    expect(newLivro).toEqual(mockLivro);
    expect(mockLivroModel.create).toHaveBeenCalledWith(createLivroDto);
  });

  it('should return all livros', async () => {
    const livros = await service.findAll();
    expect(livros).toEqual([mockLivro]);
  });

  it('should return a livro by id', async () => {
    const livro = await service.findOne('1');
    expect(livro).toEqual(mockLivro);
  });

  it('should throw an error if livro not found', async () => {
    await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
  });

  it('should update a livro', async () => {
    const updatedLivro = { ...mockLivro, titulo: 'Animal Farm' };
    const livro = await service.update('1', updatedLivro);
    expect(livro).toEqual(updatedLivro);
  });

  it('should delete a livro', async () => {
    const livro = await service.delete('1');
    expect(livro).toEqual(mockLivro);
  });
});
