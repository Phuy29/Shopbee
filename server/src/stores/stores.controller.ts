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
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Get()
  @ApiOkResponse({ type: StoreEntity, isArray: true })
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: StoreEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: StoreEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStoreDto: UpdateStoreDto,
  ) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: StoreEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.storesService.remove(id);
  }
}
