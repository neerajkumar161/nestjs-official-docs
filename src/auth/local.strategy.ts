import { HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userId: number, password: string): Promise<User> {
    console.log('Im reaching here!');
    const user = await this.authService.validateUser(userId, password);
    console.log(user);
    if (!user) {
      throw new HttpException('error', 302);
    }
    return user;
  }
}
