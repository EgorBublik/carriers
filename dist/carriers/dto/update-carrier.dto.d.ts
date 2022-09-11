export declare class UpdateCarrierDto {
    firstname: string;
    secondname: string;
    contacFace: [
        firstname: string,
        secondname: string,
        email: string,
        phone: string
    ];
    phone: string;
    email: string;
    description: string;
    route: [
        typeRoute: string,
        countryDeparture: string,
        regionDeparture: string,
        cityDeparture: string,
        countryRoute: string,
        regionRoute: string,
        cityRoute: string
    ];
}
