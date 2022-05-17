import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CommonService } from './common.service';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat | null {
    const cat = this.cats.find((cat) => cat.id === id);
    if (cat) {
      return cat;
    }
    return null;
  }
}
