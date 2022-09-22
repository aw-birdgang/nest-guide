import {Injectable, Logger} from '@nestjs/common';
import {InjectQueue} from "@nestjs/bull";
import {Queue} from "bull";

@Injectable()
export class DepositService {
    constructor(@InjectQueue('message-queue') private readonly depositQueue: Queue) {}

    private readonly logger = new Logger(DepositService.name);

    async sendMessage(message: string) {
        await this.depositQueue.add('message-job', {
            text: message
        });
        this.logger.log("DepositService > depositQueue size :: " + await this.depositQueue.count());
    }
}
