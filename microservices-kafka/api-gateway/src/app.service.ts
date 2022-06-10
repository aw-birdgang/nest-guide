import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async createOrder({ userId, price }: CreateOrderRequest) {
    this.logger.log('userId : ' + userId + ' , price : ' + price);
    const user = this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
    return user;
  }
}
