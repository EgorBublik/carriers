export declare class ContactFaceDto {
    name: string;
    position: string;
    email: string;
    phone: any;
}
export declare class RouteCarrierDto {
    typeRoute: string;
    countryDeparture: string;
    regionDeparture: string;
    cityDeparture: string;
    countryRoute: string;
    regionRoute: string;
    cityRoute: string;
}
export declare class CreateCarrierDto {
    name: string;
    type: any;
    contract: string;
    contactFace: ContactFaceDto[];
    route: RouteCarrierDto[];
    description: string;
}
