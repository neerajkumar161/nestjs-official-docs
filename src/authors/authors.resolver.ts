import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { loggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { BaseResolver } from 'src/common/resolvers/base.resolver';
import { AuthorsService } from './authors.service';
import { GetAuthorArgs } from './dto/get-authors.args';
import { Author, AuthorPaginated } from './models/author.model';

const pubSub = new PubSub();

@Resolver(() => Author)
export class AuthorsResolver extends BaseResolver(Author) {
  constructor(private authorsService: AuthorsService) {
    super();
  }

  @Query(() => Author, {
    name: 'getAuthor', // will change name of query function,
    description: 'Get Author Data',
    nullable: true, // this query can return null as well
  })
  async getAuthor(
    // @Args('id', { type: () => Int }) id: number,
    @Args() args: GetAuthorArgs,
  ): Promise<Author> {
    return this.authorsService.getAuthor(args.id);
  }

  @ResolveField(() => undefined, { middleware: [loggerMiddleware] })
  // Name of Field that contains in getAuthor query function - eg. posts, title etc.
  async posts(@Parent() author: Author) {
    console.log('Resolve field author', author);
    // const { id } = author;
    return author.posts;
  }

  @Query(() => AuthorPaginated)
  async getPaginatedAuthor(): Promise<AuthorPaginated> {
    return this.authorsService.authorsPaginated();
  }

  @Mutation(() => Boolean)
  async callSubscription(): Promise<boolean> {
    pubSub.publish('commentAdded', {
      commentAdded: 'Comment Added getPaginatedAuthor!',
    });
    return true;
  }

  // Subscriptions
  @Subscription(() => String)
  commentAdded() {
    // console.log('Subscription called!');
    return pubSub.asyncIterator('commentAdded');
  }
}
