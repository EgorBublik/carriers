
export class ContactFaceDto {
    firstname: string
    lastname: string
    position: string
    email: string
    phone: string
}

export class RouteCarrierDto {
    departure: string
    price: string
    route: string
}

export class CreateCarrierDto {
    name: string
    type
    contract: string
    contactFace: ContactFaceDto[]
    route: RouteCarrierDto[]
    description: string
}

