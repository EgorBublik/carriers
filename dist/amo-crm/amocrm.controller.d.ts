import { AmoCrmService } from './amocrm.service';
export declare const AMO_CLIENT: {
    domain: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
};
export declare class AmoCrmController {
    private readonly amoCrmService;
    constructor(amoCrmService: AmoCrmService);
    setCode({ code }: {
        code: string;
    }): Promise<any>;
    setRefreshToken(): Promise<any>;
}
