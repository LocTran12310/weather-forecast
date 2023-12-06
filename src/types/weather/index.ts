// Ref: https://openweathermap.org/current

export namespace Weather {
  export interface Data {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Array<WeatherCondition>;
    base: string;
    main: {
      temp: number; //current temperature
      feels_like: number;
      temp_min: number; //min current temperature in the city
      temp_max: number; //max current temperature in the city
      pressure: number; // Atmospheric pressure on the sea level, hPa
      humidity: number; // Humidity, %
      sea_level: number; // Atmospheric pressure on the sea level, hPa
      grnd_level: number; // Atmospheric pressure on the ground level, hPa
    };
    visibility: number; //Visibility, meter. The maximum value of the visibility is 10 km
    wind: {
      speed: number; // Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
      deg: number; // Wind direction, degrees (meteorological)
      gust: number; // Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
    };
    clouds: {
      all: number; //  Cloudiness, %
    };
    rain?: {
      // Please note that only mm as units of measurement are available for this parameter
      '1h': number; // Rain volume for the last 1 hour.
      '3h': number; // Rain volume for the last 3 hour.
    };
    snow?: {
      // Please note that only mm as units of measurement are available for this parameter
      '1h': number; // Snow volume for the last 1 hour.
      '3h': number; // Snow volume for the last 3 hour.
    };
    dt: number; // Time of data calculation, unix, UTC
    dt_txt: string;
    sys: {
      type: number;
      id: number;
      country: string; // Country code
      sunrise: number; // Sunrise time, unix, UTC
      sunset: number; // Sunset time, unix, UTC
    };
    timezone: number; // Shift in seconds from UTC
    id: number; // City ID. Please note that built-in geocoder functionality has been deprecated.
    name: string; // City name. Please note that built-in geocoder functionality has been deprecated
    cod: number;
  }

  // Ref: https://openweathermap.org/weather-conditions
  export interface WeatherCondition {
    id: number;
    main: EWeatherMain; // Rain, Snow, Clouds etc
    description: string;
    icon: string;
  }

  export enum EWeatherMain {
    // Group 2xx: Thunderstorm
    Thunderstorm = 'Thunderstorm', // icons 11d

    // Group 3xx: Drizzle
    Drizzle = 'Drizzle',

    // Group 5xx: Rain
    Rain = 'Rain',

    // Group 6xx: Snow
    Snow = 'Snow',

    // Group 7xx: Atmosphere
    Mist = 'Mist',
    Smoke = 'Smoke',
    Haze = 'Haze',
    Dust = 'Dust',
    Fog = 'Fog',
    Sand = 'Sand',
    Ash = 'Ash',
    Squall = 'Squall',
    Tornado = 'Tornado',

    // Group 800: Clear
    Clear = 'Clear',

    // Group 80x: Clouds
    Clouds = 'Clouds',
  }
}
