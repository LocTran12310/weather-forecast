// Ref: https://rapidapi.com/wirefreethought/api/geodb-cities/
export namespace GeoCity {
  export interface Data {
    label: string;
    id: number;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    regionCode: string;
    regionWdId: string;
    latitude: number;
    longitude: number;
    population: number;
    distance: string;
    placeType: string;
  }
}
