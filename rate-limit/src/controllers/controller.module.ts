import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { AppController } from './app.controller';
import { DefaultController } from './default.controller';
import { LimitController } from './limit.controller';
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
    imports: [
        ThrottlerModule.forRoot({
            limit: 5,
            ttl: 60,
            ignoreUserAgents: [/throttler-test/g],
        }),
    ],
    controllers: [AppController, DefaultController, LimitController],
    providers: [AppService],
})
export class ControllerModule {}
