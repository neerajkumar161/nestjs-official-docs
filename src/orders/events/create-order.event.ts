import { CreateOrderDto } from '../dto/create-order.dto';

export class CreateOrderEvent {
  constructor(public order: CreateOrderDto) {}
}
