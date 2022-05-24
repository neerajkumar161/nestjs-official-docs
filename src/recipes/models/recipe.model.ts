import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(() => ID, { nullable: true })
  id: number;

  @Directive('@upper')
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => [String])
  ingredients: string[];
}
