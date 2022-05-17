import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      // https://docs.nestjs.com/fundamentals/dynamic-modules#community-guidelines
      provide: 'CONNECTION',
      useValue: 'Connection Value',
    },
  ],
  exports: [CatsService], // will share the same instance to other modules https://docs.nestjs.com/modules
})
export class CatsModule {}
