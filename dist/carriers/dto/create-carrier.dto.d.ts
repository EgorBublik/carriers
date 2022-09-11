export declare class ContactFaceDto {
    firstname: string;
    lastname: string;
    position: string;
    email: string;
    phone: string;
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
