import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthorsModule } from './authors/authors.module'
import { HttpExceptionFilter } from './exception-filters/http-exception.filters'
import { GraphQLInjectionModule } from './graphql/graphql.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [RecipesModule, GraphQLInjectionModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService, HttpExceptionFilter]
})
export class AppModule {
  // // Configure Middleware
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(logger).forRoutes(
  //     // { path: 'cats', method: RequestMethod.GET },
  //     // { path: 'cats', method: RequestMethod.POST },
  //     CatsController,
  //   );
  // }
}
