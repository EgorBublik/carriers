export declare class StopDto {
    city: '';
    test: '';
}
export declare class CreateRouteDto {
    departure: string;
    destination: string;
    stop: StopDto[];
}
