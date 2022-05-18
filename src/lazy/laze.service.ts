import { Injectable } from '@nestjs/common';

@Injectable()
export class LazyService {
  getAll() {
    return 'Hello THere!! Lazy Service!';
  }
}
