import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { LivroSchema } from './schemas/livro.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Livro', schema: LivroSchema }])],
  providers: [LivroService],
  controllers: [LivroController]
})
export class LivroModule {}
