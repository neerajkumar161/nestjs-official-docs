import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  authorsPaginated = () => ({
    edges: [
      {
        cursor: '',
        node: {
          id: 1,
          firstName: 'Edge Author',
          lastName: '',
          posts: [{ id: 1, title: '' }],
          title: '',
          uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        },
      },
    ],
    nodes: [
      {
        id: 1,
        firstName: 'Node Author',
        lastName: '',
        posts: [{ id: 1, title: '' }],
        title: '',
        uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      },
    ],
    hasNextPage: true,
    totalCount: 10,
  });

  getAuthor = (id: number): Author =>
    ({
      id: id,
      firstName: 'neeraj',
      lastName: '',
      posts: [{ id: 1, title: '' }],
      title: '',
      uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    } || null);
}
