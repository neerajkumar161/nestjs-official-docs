import { Injectable } from '@nestjs/common'
import { UsersService } from './../users/users.service'

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userId: number, password: string) {
    const user = await this.userService.findOne(userId)
    if (user && user.password === password) {
      return user
    }

    return null
  }
}
