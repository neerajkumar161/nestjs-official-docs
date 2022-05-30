import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/models/paginated.model';
import { CustomUuidScalar } from 'src/common/scalars/uuid.scalar';
import { Post } from './post.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Directive('@upper') // this will tranform the result to uppercase, check upper-case.directive.ts
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post], { nullable: 'itemsAndList' })
  posts: Post[];

  @Field({
    description: 'Book Title',
    deprecationReason: 'Not useful in v2 schema',
  })
  title: string;

  @Field(() => CustomUuidScalar)
  uuid: string;
}

@ObjectType()
export class AuthorPaginated extends Paginated(Author) {}
