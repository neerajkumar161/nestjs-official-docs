import { Module } from '@nestjs/common'
import { LazyService } from './laze.service'

@Module({
  imports: [LazyService],
  exports: [LazyService]
})
export class LazyModule {}
