import { HttpService } from "@nestjs/axios";
import { CarriersService } from "src/carriers/carriers.service";
export declare class AmoCrmService {
    private readonly httpService;
    private readonly carriersService;
    constructor(httpService: HttpService, carriersService: CarriersService);
    getToken(code: string): Promise<any>;
    getRefreshToken(): Promise<any>;
    getPostInfo(page: any, type: any): Promise<any>;
    allPages(type: any, page?: number, prev?: any[]): any;
    transformContact(contact: any): Promise<{
        carriersIds: import("../carriers/schemas/carriers.schema").Carrier[];
        firstname: any;
        lastname: any;
        email: any;
        position: any;
        phone: any;
    }>;
    transformCarrier(carrier: any): {
        amoId: any;
        name: any;
    };
    sync(): Promise<void>;
}
