import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { CreateOrderEvent } from '../events/create-order.event'

@Injectable()
export class CreateOrderListener {
  @OnEvent('order.create')
  handleOrderCreatedEvent(event: CreateOrderEvent) {
    console.log('Order.create Listener')
    console.log(event)
  }
}
