import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateLivroDto {
  @IsOptional()
  @IsString()
  readonly titulo?: string;

  @IsOptional()
  @IsString()
  readonly autor?: string;

  @IsOptional()
  @IsNumber()
  readonly ano?: number;

  @IsOptional()
  @IsBoolean()
  readonly disponivel?: boolean;
}
