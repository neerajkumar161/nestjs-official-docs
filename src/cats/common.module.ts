import { forwardRef, Module } from '@nestjs/common'
import { CatsModule } from './cats.module'

@Module({
  // Module forward reference
  imports: [forwardRef(() => CatsModule)]
})
export class CommonModule {}
