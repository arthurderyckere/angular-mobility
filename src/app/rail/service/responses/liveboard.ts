export interface LiveboardResponse {
    version: string;
    timestamp: string;
    station: string;
    stationinfo: Stationinfo;
    departures: Departures;
}

interface Departures {
    number: string;
    departure: Departure[];
}

export interface Departure {
    id: string;
    delay: string;
    station: string;
    stationinfo: Stationinfo;
    time: string;
    vehicle: string;
    vehicleinfo: Vehicleinfo;
    platform: string;
    platforminfo: Platforminfo;
    canceled: string;
    left: string;
    isExtra: string;
    departureConnection: string;
    occupancy: Vehicleinfo;
}

interface Platforminfo {
    name: string;
    normal: string;
}

interface Vehicleinfo {
    name: string;
    '@id': string;
}

interface Stationinfo {
    locationX: string;
    locationY: string;
    id: string;
    name: string;
    '@id': string;
    standardname: string;
}