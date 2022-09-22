import {Controller, Get, Logger, Query} from '@nestjs/common';
import {DepositService} from "./deposit.service";

@Controller('deposits')
export class DepositController {
    constructor(
        private readonly depositService: DepositService,
    ) {}

    private readonly logger = new Logger(DepositController.name);

    @Get('message')
    async addMessage(@Query('msg') msg: string) {
        await this.depositService.sendMessage(msg);
        return msg;
    }
}
