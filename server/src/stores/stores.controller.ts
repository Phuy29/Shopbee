import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StoreEntity } from './entities/store.entity';

@Controller('stores')
@ApiTags('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiCreatedResponse({ type: StoreEntity })
  async create(@Body() createStoreDto: CreateStoreDto) {
    return new StoreEntity(await this.storesService.create(createStoreDto));
  }

  @Get()
  @ApiOkResponse({ type: StoreEntity, isArray: true })
  async findAll() {
    const stores = await this.storesService.findAll();
    return stores.map((store) => new StoreEntity(store));
  }

  @Get(':id')
  @ApiOkResponse({ type: StoreEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new StoreEntity(await this.storesService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: StoreEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStoreDto: UpdateStoreDto,
  ) {
    return new StoreEntity(await this.storesService.update(id, updateStoreDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: StoreEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new StoreEntity(await this.storesService.remove(id));
  }
}
