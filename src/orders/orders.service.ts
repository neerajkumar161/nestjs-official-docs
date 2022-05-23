import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { CreateOrderEvent } from './events/create-order.event';

@Injectable()
export class OrdersService {
  public orders: Order[] = [
    {
      id: 1,
      name: 'Order #1',
      description: 'Order #1 Description',
    },
    {
      id: 2,
      name: 'Order #2',
      description: 'Order #2 Description',
    },
  ];

  constructor(private eventEmitter: EventEmitter2) {}

  create(createOrderDto: CreateOrderDto) {
    const order = {
      id: this.orders.length + 1,
      ...createOrderDto,
    };

    this.orders.push(order);

    const createdOrderEvent = new CreateOrderEvent({
      name: order.name,
      description: order.description,
    });

    this.eventEmitter.emit('order.create', createdOrderEvent);

    return order;
  }
}
