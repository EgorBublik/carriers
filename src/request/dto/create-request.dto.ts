// export class StopDto {
//     city: ''
//     test: ''
// }

export class CreateRequestDto {
    arrival_city: string
    arrival_date: string
    comment: string
    currency: string
    departure_city: string
    departure_date: string
    freight: string
    name_cargo: string
    type: string[]
    weight_cargo: string
    size_cargo: string
}
