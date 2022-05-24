import { Directive, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInput {
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
