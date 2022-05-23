import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../schema/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [
    // MulterModule.registerAsync({
    //   useClass: MulterConfigService,
    // }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats'),
  ],
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
