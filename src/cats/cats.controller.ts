import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { AllExceptionsFilter } from './../exception-filters/all-exception.filters';
import { ValidationPipe } from './../pipes/validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CreateCat } from './interfaces/create-cat.interface';

@UseFilters(AllExceptionsFilter)
@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<CreateCat> {
    this.catService.create(createCatDto);
    return { message: 'Cat is created!' };
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catService.findOne(id);
  }
}
