import { Directive, Extensions, Field, Int, ObjectType } from '@nestjs/graphql'
import { Role } from 'src/common/enums/roles.enum'
import { checkRoleMiddleware } from 'src/common/middlewares/check-role.middleware'
import { loggerMiddleware } from 'src/common/middlewares/logger.middleware'
import { Paginated } from 'src/common/models/paginated.model'
import { CustomUuidScalar } from 'src/common/scalars/uuid.scalar'
import { Post } from './post.model'

@ObjectType()
export class Author {
  @Field(() => Int, { middleware: [loggerMiddleware] })
  id: number

  @Directive('@upper') // this will tranform the result to uppercase, check upper-case.directive.ts
  // @Field({ nullable: true })   // CLI-Plugin - https://docs.nestjs.com/graphql/cli-plugin#overview
  firstName?: string

  // @Field({ nullable: true })
  lastName?: string

  // @Field(() => [Post], { nullable: 'itemsAndList' })
  posts?: Post[]

  @Field({
    description: 'Book Title',
    deprecationReason: 'Not useful in v2 schema'
  })
  title: string

  @Field(() => CustomUuidScalar)
  uuid: string

  @Field({ middleware: [checkRoleMiddleware] })
  @Extensions({ role: Role.ADMIN })
  role?: string
}

@ObjectType()
export class AuthorPaginated extends Paginated(Author) {}
