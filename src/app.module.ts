import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './exception-filters/http-exception.filters';
import { logger } from './middlewares/logger.middleware';

@Module({
  imports: [CatsModule],
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
