import { BaseRepository } from '@app/core/repository';
import { OPEN_WEATHER_SERVICE } from '@app/services/open-weather-api';
import { Unit } from '@app/stores';
import { GeoCity } from '@app/types/geo-city';

export class OpenWeatherRepository {
  private baseURL = OPEN_WEATHER_SERVICE.URL;
  private appId = OPEN_WEATHER_SERVICE.API_KEY;
  private repository = new BaseRepository({ baseURL: this.baseURL });

  async GetWeatherByCity({
    city,
    units = Unit.EData.metric, // Celsius is default
  }: {
    city: GeoCity.Data;
    units?: Unit.EData;
  }) {
    try {
      return this.repository.get({
        url: `/weather`,
        params: {
          lat: city.latitude,
          lon: city.longitude,
          appid: this.appId,
          units: units,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async GetHourlyForecast({
    city,
    cnt = 96,
    units = Unit.EData.metric, // Celsius is default
  }: {
    city: GeoCity.Data;
    cnt?: number; // A number of timestamps in response
    units?: Unit.EData;
  }) {
    try {
      return this.repository.get({
        url: `/forecast`,
        params: {
          lat: city.latitude,
          lon: city.longitude,
          appid: this.appId,
          cnt,
          units,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
