export class StopDto {
    city: ''
    test: ''
}

export class CreateRouteDto {
    departure: string
    destination: string
    stop: StopDto[]
}
