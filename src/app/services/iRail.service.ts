import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { delay, map } from "rxjs/internal/operators";
import { StationResponse, Station } from './responses/stations';
import { Station as StationModel } from '../model/station';
import { StationResponseMappers } from './mappers/stationResponse';

@Injectable({
    providedIn: 'root'
})
export class IRailService {
    constructor(private http: HttpClient) { }
    private baseUrl: string = "https://api.irail.be";
    private stationsUrl: string = "/stations/?format=json&lang=en";

    getStations(): Observable<StationModel[]> {
        let headers = new HttpHeaders();
        headers.append("Accept", "application/json");

        return this.http.get<StationResponse>(this.baseUrl + this.stationsUrl, {
            headers: headers
        }).pipe(delay(2000)).pipe(
            map((data: StationResponse) => StationResponseMappers.mapResponseToModel(data))
        );
    }
}