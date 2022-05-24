import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  BaseContext,
  GraphQLRequestContext,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(
    requestContext: GraphQLRequestContext<BaseContext>,
  ): Promise<void | GraphQLRequestListener<BaseContext>> {
    console.log('Request Started: LoggingPlugin', requestContext.context);
    return {
      async willSendResponse() {
        console.log('Will Send Response!');
      },
    };
  }
}
