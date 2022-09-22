import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('message-queue')
export class DepositProcessor {
    private readonly logger = new Logger(DepositProcessor.name);

    @Process('message-job')
    async readOperationJob(job:Job<unknown>) {
        console.log("readOperationJob > consumer", job.data);
        // await this.sleep(10000);
        this.logger.debug('readOperationJob completed > job.id : ' + job.id);
    }

    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

}
