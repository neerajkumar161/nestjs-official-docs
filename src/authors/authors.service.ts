import { Injectable } from '@nestjs/common';

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
      },
    ],
    hasNextPage: true,
    totalCount: 10,
  });

  getAuthor = (id: number) =>
    ({
      id: id,
      firstName: '',
      lastName: '',
      posts: [{ id: 1, title: '' }],
      title: '',
    } || null);
}
