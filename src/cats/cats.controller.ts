import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { AllExceptionsFilter } from './../exception-filters/all-exception.filters';
import { RolesGuard } from './../guards/roles.guard';
import { TimeoutInterceptor } from './../interceptors/timeout.interceptor';
import { TransformInterceptor } from './../interceptors/transform.interceptor';
import { ValidationPipe } from './../pipes/validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatType } from './interfaces/cat.interface';
import { CreateCat } from './interfaces/create-cat.interface';
import { FindOneParams } from './validation/cat.findOnaParams';

@Controller('cats')
@UseFilters(AllExceptionsFilter)
@UseGuards(RolesGuard)
@UseInterceptors(TransformInterceptor, TimeoutInterceptor)
export class CatsController {
  constructor(
    private catService: CatsService, // @Inject('CONNECTION') private connect,
  ) {}

  @Post()
  @Roles('admin', 'user')
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<CreateCat> {
    // console.log('Injected', this.connect);
    this.catService.create(createCatDto);
    return { message: 'Cat is created!' };
  }

  @Get()
  async findAll(): Promise<CatType[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return this.catService.findOne(params.id);
  }
}
