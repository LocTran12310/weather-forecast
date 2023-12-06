import { HCMCityLocation, getUserLocation } from '@app/services/user-location';
import { useAppStore } from '@app/stores';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useCurrentWeatherCheck = () => {
  const fetchCurrentWeather = useAppStore((state) => state.fetchCurrentWeather);
  const setLoading = useAppStore((state) => state.setLoading);
  const geoCity = useAppStore((state) => state.geoCity);

  const fetchByUserLocation = async () => {
    try {
      setLoading(true);
      const city = await getUserLocation();
      fetchCurrentWeather({
        city: {
          ...geoCity,
          ...city,
        },
      });
    } catch (error: any) {
      toast.warning(error.message);
      fetchCurrentWeather({
        city: {
          ...geoCity,
          ...HCMCityLocation,
        },
      });
      throw error;
    }
  };

  useEffect(() => {
    if (!geoCity.latitude && !geoCity.longitude) {
      fetchByUserLocation();
    }
  }, []);
};

export default useCurrentWeatherCheck;
