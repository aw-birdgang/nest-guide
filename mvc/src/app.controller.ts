import { Controller, Get, Render } from '@nestjs/common';

@Controller('view/index')
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
