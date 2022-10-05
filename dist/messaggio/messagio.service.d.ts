import { HttpService } from "@nestjs/axios";
export declare const MESSAGGIO_API_KEY = "ccrdhttccnrc739cds40";
export declare class MessaggioService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendMessage(phones: string[]): Promise<any>;
}
