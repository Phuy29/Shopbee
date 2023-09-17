import { ApiProperty } from '@nestjs/swagger';
import { Category, Prisma, Product } from '@prisma/client';
import { StoreEntity } from 'src/stores/entities/store.entity';

export class ProductEntity implements Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  images: Prisma.JsonValue;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  inventory: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  storeId: number;

  @ApiProperty({ required: false, type: StoreEntity })
  store: StoreEntity;

  constructor({ store, price, ...data }: Partial<ProductEntity>) {
    Object.assign(this, data);

    if (store) {
      this.store = new StoreEntity(store);
    }

    if (price) {
      this.price = Number(price);
    }
  }
}
