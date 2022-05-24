import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { HttpExceptionFilter } from './exception-filters/http-exception.filters';
import { logger } from './middlewares/logger.middleware';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    // GraphQL - Integration - https://docs.nestjs.com/graphql/quick-start#getting-started-with-graphql--typescript
    RecipesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // include: [CatsModule],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      sortSchema: true,
      // debug: false,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
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
