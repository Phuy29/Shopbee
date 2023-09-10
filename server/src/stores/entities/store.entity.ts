// src/users/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Store } from '@prisma/client';

export class StoreEntity implements Store {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  userId: number;
}
