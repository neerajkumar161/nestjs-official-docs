import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception-filters/all-exception.filters';
import { ValidationPipe } from './pipes/validation.pipe';
import { RedisIoAdapter } from './ws/adapters/redis-io.adapters';

async function bootstrap() {
  // Using Express Underlying API
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();

  app.useWebSocketAdapter(redisIoAdapter);
  // app.use(cors())    // Global Middeware we can use
  // app.useGlobalFilters(new HttpExceptionFilter());
  // Fully Customized Exception Filter
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter.getInstance()));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
