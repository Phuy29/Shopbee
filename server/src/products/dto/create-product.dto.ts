import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ default: 0 })
  price: number;

  @ApiProperty({ required: false, default: null })
  images?: string = null;

  @ApiProperty()
  category: Category;

  @ApiProperty({ default: 0 })
  inventory: number;

  @ApiProperty({ required: false, nullable: true })
  storeId: number | null;
}
