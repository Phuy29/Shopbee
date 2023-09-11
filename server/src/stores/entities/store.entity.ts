// src/users/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Store } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

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

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<StoreEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
