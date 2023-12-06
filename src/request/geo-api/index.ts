import { BaseRepository } from '@app/core/repository';
import { GEO_API_URL, geoApiOptions } from '@app/services/geo-api';

export class GeoRepository {
  private baseURL = GEO_API_URL;
  private repository = new BaseRepository({ baseURL: this.baseURL });

  async getGeoCities({ textSearch }: { textSearch: string }) {
    try {
      return this.repository.get({
        url: `/cities`,
        params: {
          namePrefix: textSearch,
        },
        ...geoApiOptions,
      });
    } catch (e) {
      throw e;
    }
  }
}
