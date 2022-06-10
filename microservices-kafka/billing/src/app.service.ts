import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.logger.log('orderCreatedEvent.userId : ' + orderCreatedEvent.userId);
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user ${user.name} with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}... & ${user.email} & `,
        );
      });
  }
}
