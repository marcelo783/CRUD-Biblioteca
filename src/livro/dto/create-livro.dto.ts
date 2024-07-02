import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateLivroDto {
  @IsNotEmpty()
  @IsString()
  readonly titulo: string;

  @IsNotEmpty()
  @IsString()
  readonly autor: string;

  @IsNotEmpty()
  @IsNumber()
  readonly ano: number;

  @IsOptional()
  @IsBoolean()
  readonly disponivel?: boolean;
}
