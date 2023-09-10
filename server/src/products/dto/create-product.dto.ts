import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ required: false, default: null })
  images?: string = null;

  @IsEnum(Category)
  @IsNotEmpty()
  @ApiProperty()
  category: Category;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  inventory: number;

  @IsNumber()
  @ApiProperty({ required: false, nullable: true })
  storeId: number | null;
}
