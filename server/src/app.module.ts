import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [PrismaModule, ProductsModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
