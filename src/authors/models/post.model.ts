import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  title: string

  @Field(() => Int, { nullable: true })
  votes?: number
}
