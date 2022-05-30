import { Module } from '@nestjs/common'
import { CreateOrderListener } from './listeners/created-order.listeners'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, CreateOrderListener]
})
export class OrdersModule {}
