export interface StationResponse {
    version: string;
    timestamp: string;
    station: Station[]
}

export interface Station {
    locationX: string;
    locationY: string;
    id: string;
    name: string;
    standardname: string;
}