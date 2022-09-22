import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { DepositController } from './deposit.controller';
import { DepositProcessor } from './deposit.processor';
import {DepositService} from "./deposit.service";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'message-queue',
        })
    ],
    controllers: [DepositController],
    providers: [DepositService, DepositProcessor],
})
export class DepositModule {}
