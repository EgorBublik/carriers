export declare class RouteCarrierDto {
    departure: string;
    price: string;
    route: string;
}
export declare class CreateCarrierDto {
    name: string;
    type: any;
    contract: string;
    route: RouteCarrierDto[];
    description: string;
}
