import { Liveboard } from 'src/app/model/liveboard';
import { LiveboardResponse, Departure } from '../responses/liveboard';

export namespace LiveboardResponseMappers {
    export function mapResponseToModel(response: LiveboardResponse): Liveboard {
        return {
            stationId: response.stationinfo.id,
            departures: response.departures.departure.map((x: Departure) => {
                return {
                    id: x.id,
                    delay: x.delay,
                    destinationStationId: x.stationinfo.id,
                    destinationStationName: x.stationinfo.name,
                    time: new Date(Date.parse(x.time)),
                    vehicle: x.vehicleinfo["@id"],
                    platform: x.platform,
                    isCanceled: x.canceled === "0",
                    isExtra: x.isExtra === "0",
                    isLeft: x.left === "0"
                }
            })
        }
    }
}