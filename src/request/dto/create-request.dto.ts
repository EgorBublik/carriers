// export class StopDto {
//     city: ''
//     test: ''
// }

export class CreateRequestDto {

    
    countryArrival: string
    regionArrival: string
    cityArrival: string

    dateArrival: string
    comment: string
    currency: string

    countryDeparture: string
    regionDeparture: string
    cityDeparture: string
    
    dateDeparture: string
    freight: string
    nameCargo: string
    type: string[]
    weightCargo: string
    sizeCargo: string
}
