import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { delay, map } from "rxjs/internal/operators";
import { Station as StationModel } from "../../model/station";
import { Liveboard as LiveboardModel } from "../../model/liveboard";
import { StationResponse } from './responses/stations';
import { StationResponseMappers } from './mappers/stationResponse';
import { LiveboardResponse } from './responses/liveboard';
import { LiveboardResponseMappers } from './mappers/liveboardResponse';

@Injectable({
    providedIn: 'root'
})
export class IRailService {
    constructor(private http: HttpClient) { }
    private baseUrl: string = "https://api.irail.be";
    private stationsUrl: string = "/stations/";
    private liveboarUrl: string = "/liveboard/"
    /**
     * Get Belgian rail stations
     * An artificial delay is added to showcase display state
     */
    getStations(): Observable<StationModel[]> {
        let headers = this.getHeadersForJson();
        let params = new HttpParams().append("format", "json").append("lang", "en");

        return this.http.get<StationResponse>(this.baseUrl + this.stationsUrl, {
            headers: headers,
            params: params
        }).pipe(delay(2000)).pipe(
            map((data: StationResponse) => StationResponseMappers.mapResponseToModel(data))
        );
    }
    /**
     * Get liveboard for station
     * @param id unique identifier for station
     */
    getLiveBoard(id: string): Observable<LiveboardModel> {
        let headers = this.getHeadersForJson();
        let params = new HttpParams().append("id", id).append("date", this.getNow())

        return this.http.get<LiveboardResponse>(this.baseUrl + this.liveboarUrl,
            {
                headers: headers,
                params: params
            }).pipe(delay(2000)).pipe(
                map((data: LiveboardResponse) => LiveboardResponseMappers.mapResponseToModel(data))
            );
    }
    private getNow(): string {
        let now = new Date();
        let month = (now.getMonth() + 1).toString().padStart(2, '0');
        let day = now.getDate().toString().padStart(2, '0');
        return `${day}${month}${now.getFullYear()}`;
    }
    private getHeadersForJson(): HttpHeaders {
        let headers = new HttpHeaders();
        headers.append("Accept", "application/json");
        return headers;
    }
}