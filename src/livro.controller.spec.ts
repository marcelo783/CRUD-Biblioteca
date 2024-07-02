import { Test, TestingModule } from '@nestjs/testing';
import { LivroController } from './livro/livro.controller';
import { LivroService } from './livro/livro.service';

const mockLivroService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('LivroController', () => {
  let controller: LivroController;
  let service: LivroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroController],
      providers: [
        {
          provide: LivroService,
          useValue: mockLivroService,
        },
      ],
    }).compile();

    controller = module.get<LivroController>(LivroController);
    service = module.get<LivroService>(LivroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new livro', async () => {
    const dto = { titulo: '1984', autor: 'George Orwell', ano: 1949 };
    const result = { ...dto, _id: '1', disponivel: true };

    jest.spyOn(service, 'create').mockResolvedValue(result as any);
    expect(await controller.create(dto)).toEqual({
      message: 'Livro cadastrado',
      data: result,
    });
  });

  it('should return all livros', async () => {
    const result = [{ titulo: '1984', autor: 'George Orwell', ano: 1949, _id: '1', disponivel: true }];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as any);
    expect(await controller.findAll()).toEqual({
      message: 'Lista de livros',
      data: result,
    });
  });

  it('should return a livro by id', async () => {
    const result = { titulo: '1984', autor: 'George Orwell', ano: 1949, _id: '1', disponivel: true };
    jest.spyOn(service, 'findOne').mockResolvedValue(result as any);
    expect(await controller.findOne('1')).toEqual({
      data: result,
    });
  });

  it('should update a livro', async () => {
    const dto = { titulo: 'Animal Farm' };
    const result = { titulo: 'Animal Farm', autor: 'George Orwell', ano: 1949, _id: '1', disponivel: true };

    jest.spyOn(service, 'update').mockResolvedValue(result as any);
    expect(await controller.update('1', dto)).toEqual({
      message: 'Livro atualizado',
      data: result,
    });
  });

  it('should delete a livro', async () => {
    jest.spyOn(service, 'delete').mockResolvedValue(true as any);
    expect(await controller.delete('1')).toEqual({
      message: 'Livro excluído',
    });
  });
});
