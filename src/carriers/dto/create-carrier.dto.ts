export class ContactFaceDto {
    name: string
    position: string
    email: string
    phone
}
    
export class RouteCarrierDto {
    typeRoute: string
    countryDeparture: string
    regionDeparture: string
    cityDeparture: string
    countryRoute: string
    regionRoute: string
    cityRoute: string
}

export class CreateCarrierDto {
    name: string
    type
    contract: string
    contactFace: ContactFaceDto[]
    route: RouteCarrierDto[]
    description: string
}

