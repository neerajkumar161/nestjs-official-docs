import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import configuration from './config/configuration';
import { HttpExceptionFilter } from './exception-filters/http-exception.filters';
import { logger } from './middlewares/logger.middleware';
import { OrdersModule } from './orders/orders.module';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [
    OrdersModule,
    EventEmitterModule.forRoot(),
    CacheModule.register({ ttl: 5, max: 10 }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true, // https://docs.nestjs.com/techniques/configuration#cache-environment-variables,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    CatsModule,
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'cats',
    }),
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
    AuthModule,
    // UsersModule,
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
