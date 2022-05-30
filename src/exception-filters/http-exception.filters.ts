import { ArgumentsHost, Catch, HttpException } from '@nestjs/common'
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql'

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // GraphQL: Other features
    const gqlHost = GqlArgumentsHost.create(host)

    return { info: gqlHost.getInfo(), exception }
  }
}
