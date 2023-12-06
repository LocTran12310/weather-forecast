import { APP_ROUTE } from '@app/constants/route.constants';
import { ROUTE_NO_NEED_DIRECT } from '@app/layouts/verticalLayout/components/LayoutHeader/components/SearchInput/hooks';
import { getUserLocation } from '@app/services/user-location';
import { useAppStore } from '@app/stores';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type Props = {};

const useGeneralSwitch = () => {
  const settingConfig = useAppStore((state) => state.settingConfig);
  const setSettingConfig = useAppStore((state) => state.setSettingConfig);
  const geoCity = useAppStore((state) => state.geoCity);
  const fetchCurrentWeather = useAppStore((state) => state.fetchCurrentWeather);

  const [state, setState] = useState<boolean>(settingConfig?.location);

  const navigate = useNavigate();

  const handleOnClick = () => {
    setState((prev) => !prev);
  };

  const fetchWeatherByUserLocation = async () => {
    try {
      const city = await getUserLocation();
      await fetchCurrentWeather({
        city: {
          ...geoCity,
          ...city,
        },
      });
      directBrower();
    } catch (error: any) {
      setState(false);
      setSettingConfig({ location: false });
      toast.error(error?.message);
    }
  };

  const directBrower = () => {
    if (ROUTE_NO_NEED_DIRECT.includes(location.pathname)) return;

    navigate(APP_ROUTE.HOME);
  };

  useEffect(() => {
    if (state === settingConfig.location) return;

    if (!state) {
      setSettingConfig({ location: false });
      return;
    }

    setSettingConfig({ location: true });
    fetchWeatherByUserLocation();
  }, [state]);

  return {
    state,
    handleOnClick,
  };
};

export default useGeneralSwitch;
