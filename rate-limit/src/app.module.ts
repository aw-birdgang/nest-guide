import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ControllerModule } from './controllers/controller.module';
import {ThrottlerGuard} from "@nestjs/throttler";

@Module({
  imports: [ControllerModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
