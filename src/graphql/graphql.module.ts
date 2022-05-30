import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { join } from 'path';
import { upperDirectiveTransformer } from 'src/common/directives/upper-case.directive';
import { CustomUuidScalar } from 'src/common/scalars/uuid.scalar';

// GraphQL - Integration - https://docs.nestjs.com/graphql/quick-start#getting-started-with-graphql--typescript

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      resolvers: { UUID: CustomUuidScalar },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true, // Enabling Subscription - https://docs.nestjs.com/graphql/subscriptions#enable-subscriptions-with-apollo-driver,
      // subscriptions: { 'graphql-ws': true },
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
})
export class GraphQLInjectionModule {}
