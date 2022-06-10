import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-request.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createOrder(
    @Body() createOrderRequest: CreateOrderRequest,
    @Res() res: Response,
  ) {
    const user = await this.appService.createOrder(createOrderRequest);
    return res.status(HttpStatus.CREATED).json(user);
  }
}
