
export class ContactFaceDto {
    firstname: string
    lastname: string
    position: string
    email: string
    phone: string
}

export class CheckboxItemDto {
    type: string
}

export class RouteDto {
    departure: string
    price: string
    route: string
}

export class CreateCarrierDto {
    name: string
    type: CheckboxItemDto[]
    contract: string
    contactFace: ContactFaceDto[]
    route: RouteDto[]
    description: string
}
