import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from './../exception-filters/all-exception.filters';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CreateCat } from './interfaces/create-cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<CreateCat> {
    this.catService.create(createCatDto);
    return { message: 'Cat is created!' };
  }

  @Get()
  @UseFilters(AllExceptionsFilter)
  async findAll(): Promise<Cat[]> {
    try {
      return this.catService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
}
