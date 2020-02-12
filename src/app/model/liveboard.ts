export interface Liveboard {
    stationId: string;
    departures: Departure[];
}
export interface Departure {
    id: string;
    delay: string;
    destinationStationId: string;
    destinationStationName: string;
    time: Date;
    vehicle: string;
    platform: string;
    isCanceled: boolean;
    isExtra: boolean;
    isLeft: boolean;
}