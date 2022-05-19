import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './exception-filters/http-exception.filters';
import { logger } from './middlewares/logger.middleware';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot(
      'mongodb+srv://neerajkumar:neerajkumar161@cluster0.yyx0x.mongodb.net/cats?retryWrites=true&w=majority',
      {
        connectionName: 'cats',
      },
    ),
    MongooseModule.forFeatureAsync(
      [
        // Not working
        {
          name: Cat.name,
          useFactory: () => {
            const schema = CatSchema;
            schema.pre('save', (doc: any) => {
              console.log('im here!');
              console.log(`${doc.id} is saved on database on pre plugin!`);
            });
            return schema;
          },
        },
      ],
      'cats',
    ),
  ],
  controllers: [AppController],
  providers: [AppService, HttpExceptionFilter],
})
export class AppModule implements NestModule {
  // Configure Middleware
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(
      // { path: 'cats', method: RequestMethod.GET },
      // { path: 'cats', method: RequestMethod.POST },
      CatsController,
    );
  }
}
