import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({
      data: createStoreDto,
      include: {
        products: true,
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.store.findMany({
      include: {
        products: true,
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.store.findUnique({
      where: { id },
      include: {
        products: true,
        user: true,
      },
    });
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({
      where: { id },
      data: updateStoreDto,
      include: {
        products: true,
        user: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.store.delete({
      where: { id },
      include: {
        products: true,
        user: true,
      },
    });
  }
}
