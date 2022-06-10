import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  private readonly users: any[] = [
    {
      userId: '1',
      stripeUserId: '1580',
      name: 'birdgang',
      email: 'birdgang@gmail.com',
    },
    {
      userId: '2',
      stripeUserId: '27279',
      name: 'mina',
      email: 'mina@gmail.com',
    },
    {
      userId: '3',
      stripeUserId: '3529',
      name: 'minsu',
      email: 'minsu@gmail.com',
    },
    {
      userId: '4',
      stripeUserId: '4885',
      name: 'nayoung',
      email: 'nayoung@gmail.com',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    this.logger.log('getUserRequest.userId : ' + getUserRequest.userId);
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
