import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import {Throttle} from "@nestjs/throttler";

@Throttle(2, 10)
@Controller('limit')
export class LimitController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getThrottled() {
        return this.appService.success();
    }

    @Throttle(5, 10)
    @Get('higher')
    getHigher() {
        return this.appService.success();
    }
}
