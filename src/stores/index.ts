import { OpenWeatherRepository } from '@app/request/open-weather-api';
import { GeoCity } from '@app/types/geo-city';
import { HourlyForecast } from '@app/types/hourly-forecast';
import { Weather } from '@app/types/weather';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export namespace Unit {
  export enum EData {
    standard = 'standard', // Kelvins
    metric = 'metric', // Celsius
    imperial = 'imperial', // Fahrenheit
  }
}

export interface IAppState {
  loading: boolean;
  geoCity: GeoCity.Data;
  currentWeather: Weather.Data;
  hourlyForecast: HourlyForecast.Data;
  settingConfig: {
    units: Unit.EData;
    location: boolean;
  };

  recents: {
    [id: number]: {
      currentWeather: Weather.Data;
      hourlyForecast: HourlyForecast.Data;
    };
  };
  idRecentActive: number;
}

export interface IAppAction {
  setLoading: (loading: boolean) => void;
  setGeoCity: (payload: GeoCity.Data) => void;
  setCurrentWeather: (payload: Weather.Data) => void;

  setSettingConfig: (payload: Partial<IAppState['settingConfig']>) => void;

  fetchCurrentWeather: ({ city }: { city: GeoCity.Data }) => Promise<void>;

  setRecents: ({
    id,
    data,
  }: {
    id: number;
    data: {
      currentWeather: Weather.Data;
      hourlyForecast: HourlyForecast.Data;
    };
  }) => void;
  setRecentActive: (idRecentActive: number) => void;
  clearRecent: (id: number) => void;
}

const initialState: IAppState = {
  loading: false,
  geoCity: {} as GeoCity.Data,
  currentWeather: {} as Weather.Data,
  hourlyForecast: {} as HourlyForecast.Data,
  settingConfig: {
    units: Unit.EData.metric,
    location: false,
  },

  recents: {},
  idRecentActive: 0,
};

type IAppStore = IAppState & IAppAction;

export const useAppStore = create<IAppStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,
        setLoading: (loading: boolean) => {
          set({ loading });
        },
        setGeoCity: (payload: GeoCity.Data) => {
          set({ geoCity: payload });
        },
        setCurrentWeather: (payload: Weather.Data) => {
          set({ currentWeather: payload });
        },

        setSettingConfig: (payload: Partial<IAppState['settingConfig']>) => {
          set((state) => {
            state.settingConfig = {
              ...state.settingConfig,
              ...payload,
            };
          });
        },

        fetchCurrentWeather: async ({ city }: { city: GeoCity.Data }) => {
          try {
            set({ loading: true });
            const repository = new OpenWeatherRepository();
            const getHourlyForecast = repository.GetHourlyForecast({
              city,
              units: get().settingConfig.units,
            });
            const getWeatherByCity = repository.GetWeatherByCity({
              city,
              units: get().settingConfig.units,
            });

            const listPromise = [getWeatherByCity, getHourlyForecast];
            const responses = await Promise.allSettled(listPromise).then(
              (response) => {
                return response.map((item: any) => item.value);
              }
            );

            const currentWeather = responses[0] || {};
            const hourlyForecast = responses[1] || {};

            set((state) => {
              state.loading = false;
              state.geoCity = city;
              state.currentWeather = responses[0] || {};
              state.hourlyForecast = responses[1] || {};
              state.recents = {
                ...state.recents,
                [currentWeather.id]: { currentWeather, hourlyForecast },
              };
              state.idRecentActive = currentWeather.id;
            });
          } catch (error) {
            throw error;
          }
        },

        setRecents: ({
          id,
          data,
        }: {
          id: number;
          data: {
            currentWeather: Weather.Data;
            hourlyForecast: HourlyForecast.Data;
          };
        }) => {
          set((state) => {
            state.recents = {
              ...state.recents,
              [id]: data,
            };
          });
        },
        setRecentActive: (idRecentActive: number) => {
          set({ idRecentActive });
        },
        clearRecent: (id: number) => {
          try {
            const recentTemp = { ...get().recents };
            const recent = recentTemp[id];
            const recentKeys = Object.keys(recentTemp);

            if (!recent) return;

            delete recentTemp[id];

            // If delete activeTab Then first tab will be activated
            if (get().idRecentActive === id) {
              // const _activeTemp = _orderKeys[0] === id ? _orderKeys[1] : _orderKeys[0];
              const idFirst =
                parseInt(recentKeys[0], 10) === id
                  ? parseInt(recentKeys[1], 10)
                  : parseInt(recentKeys[0], 10);

              set((state) => ({
                ...state,
                recents: recentTemp,
                idRecentActive: idFirst || 0,
              }));
              return;
            }

            set((state) => ({
              ...state,
              recents: recentTemp,
            }));
          } catch (error) {
            throw error;
          }
        },
      })),
      {
        name: 'app',
      }
    )
  )
);
