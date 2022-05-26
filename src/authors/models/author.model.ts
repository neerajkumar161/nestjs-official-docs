import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/models/paginated.model';
import { Post } from './post.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

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
}

@ObjectType()
export class AuthorPaginated extends Paginated(Author) {}
