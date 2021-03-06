import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import {SkipThrottle, Throttle} from "@nestjs/throttler";

@Controller()
@Throttle(2, 10)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async test() {
        return this.appService.success();
    }

    @Get('ignored')
    @SkipThrottle()
    async ignored() {
        return this.appService.ignored();
    }

    @Get('ignore-user-agents')
    async ignoreUserAgents() {
        return this.appService.ignored();
    }
}
