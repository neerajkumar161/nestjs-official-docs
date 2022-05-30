import { IntrospectAndCompose } from '@apollo/gateway'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthorsModule } from 'src/authors/authors.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: { cors: true },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'authors', url: 'http://user-service/graphql' }, // using this we can fetch schema graphs from urls
            { name: 'posts', url: 'http://post-service/graphql' }
          ],
          subgraphHealthCheck: true
        })
      }
    })
  ],
  providers: [AuthorsModule]
})
export class GraphQLInjectionModule {}
