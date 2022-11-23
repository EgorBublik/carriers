import { HttpService } from "@nestjs/axios";
export declare const MESSAGGIO_API_KEY = "";
export declare class MessaggioService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendMessage({ data }: {
        data: any;
    }): Promise<any>;
}
