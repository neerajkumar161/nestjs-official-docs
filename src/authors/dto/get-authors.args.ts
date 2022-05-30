import { ArgsType, Field, Int } from '@nestjs/graphql'
import { PaginationArgs } from './pagintaion.args'

@ArgsType()
export class GetAuthorArgs extends PaginationArgs {
  @Field({ nullable: true })
  firstName?: string

  @Field(() => Int)
  id: number
}
