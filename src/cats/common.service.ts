import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { CatsService } from './cats.service'

@Injectable()
export class CommonService {
  constructor(
    // Solve, Circular Dependency using forwardRef - same will be in catService
    @Inject(forwardRef(() => CatsService)) private catService: CatsService
  ) {}
}
