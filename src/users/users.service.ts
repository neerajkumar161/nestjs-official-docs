import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'User #1',
      password: 'user1',
    },
    {
      id: 2,
      username: 'User #2',
      password: 'user2',
    },
  ];

  async findOne(id: number): Promise<User | undefined> {
    console.log('Im here');
    const users = this.users.find((el) => el.id === id);
    return users;
  }
}
