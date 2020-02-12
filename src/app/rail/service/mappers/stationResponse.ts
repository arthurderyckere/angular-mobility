import { Station } from 'src/app/model/station';
import { StationResponse } from '../responses/stations';

export namespace StationResponseMappers {
    export function mapResponseToModel(response: StationResponse): Station[] {
        return response.station.map((x: Station) => {
            return {
                id: x.id,
                locationX: x.locationX,
                locationY: x.locationY,
                name: x.name
            }
        });
    }
}
