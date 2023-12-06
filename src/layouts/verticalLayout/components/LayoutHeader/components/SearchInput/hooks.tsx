import { APP_ROUTE } from '@app/constants/route.constants';
import useDebounce from '@app/core/debounce';
import { GeoRepository } from '@app/request/geo-api';
import { HCMCityLocation, getUserLocation } from '@app/services/user-location';
import { useAppStore } from '@app/stores';
import { GeoCity } from '@app/types/geo-city';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const USE_CURRENT_LOCATION = 'use-current-location';
export const ROUTE_NO_NEED_DIRECT = [APP_ROUTE.HOME, APP_ROUTE.CITIES];

export const DEFAULT_CURRENT_LOCATION_OPTIONS = {
  label: 'Use Current Location',
  value: USE_CURRENT_LOCATION,
};

const useSearchInput = () => {
  const fetchCurrentWeather = useAppStore((state) => state.fetchCurrentWeather);
  const geoCity = useAppStore((state) => state.geoCity);

  const navigate = useNavigate();
  const location = useLocation();

  const getGeoCities = async (textSearch: string) => {
    try {
      const repository = new GeoRepository();
      const response = await repository.getGeoCities({ textSearch });

      const geoCities = response.data.map((item: GeoCity.Data) => ({
        ...item,
        label: `${item?.name}, ${item.country}, ${item.countryCode}`,
        value: item.id,
      }));
      if (!Object.keys(geoCity)?.length) {
        fetchCurrentWeather({
          city: {
            ...geoCity,
            ...HCMCityLocation,
          },
        });
      }

      return geoCities;
    } catch (error: any) {
      console.error(error);
      toast.warn(error.message);
    }
  };

  const loadOptions = useDebounce(
    async (textSearch: string, callback: (options: any[]) => void) => {
      const newOptions: Array<any> = await getGeoCities(textSearch);
      newOptions.unshift(DEFAULT_CURRENT_LOCATION_OPTIONS);

      callback(newOptions);
    },
    500
  );

  const directBrower = () => {
    if (ROUTE_NO_NEED_DIRECT.includes(location.pathname)) return;

    navigate(APP_ROUTE.HOME);
  };

  const handleOnChange = useCallback(async (option: any) => {
    try {
      let city = option;

      if (option?.value === USE_CURRENT_LOCATION) {
        city = await getUserLocation();
      }

      fetchCurrentWeather({ city });
      directBrower();
    } catch (error: any) {
      toast.error(error?.message);
    }
  }, []);

  return { handleOnChange, loadOptions };
};

export default useSearchInput;
