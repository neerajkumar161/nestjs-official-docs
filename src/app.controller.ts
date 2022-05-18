import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private lazyModuleLoader: LazyModuleLoader,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);
    // console.log(moduleRef);
    return this.appService.getHello();
  }
}
