import { Weather } from '../weather';

export namespace HourlyForecast {
  export interface Data {
    cod: string;
    message: number;
    cnt: number; // Number of timestamps returned by this API call
    list: Array<Weather.Data>;
    city: ICity;
  }
  export interface ICity {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }

  export interface Coord {
    lat: number;
    lon: number;
  }
}
