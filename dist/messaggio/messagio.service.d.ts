import { HttpService } from "@nestjs/axios";
export declare const MESSAGGIO_API_KEY = "ccrdd3lccnrc739cdfeg";
export declare class MessaggioService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendMessage({ data }: {
        data: any;
    }): Promise<any>;
}
