import {
  Controller,
  Get,
  Post,
  Request,
  UseFilters,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AppService } from './app.service'
import { AllExceptionsFilter } from './exception-filters/all-exception.filters'

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(
    private readonly appService: AppService // private lazyModuleLoader: LazyModuleLoader,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);
    // console.log(moduleRef);
    return this.appService.getHello()
  }

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Request() req): Promise<Express.User> {
    console.log(req.user)
    return req.user
  }
}
