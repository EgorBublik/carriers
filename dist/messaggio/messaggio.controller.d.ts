import { MessaggioService } from './messagio.service';
export declare class MessagioController {
    private readonly messaggioService;
    constructor(messaggioService: MessaggioService);
    sendMessage(data?: {}): Promise<any>;
}
