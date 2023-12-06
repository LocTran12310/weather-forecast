import { Unit, useAppStore } from '@app/stores';
import { useCallback } from 'react';

const temperatureUnit = [
  { label: 'Celsius', value: Unit.EData.metric },
  { label: 'Fahrenheit', value: Unit.EData.imperial },
];

const useUnits = () => {
  const settingConfig = useAppStore((state) => state.settingConfig);
  const setSettingConfig = useAppStore((state) => state.setSettingConfig);
  const fetchCurrentWeather = useAppStore((state) => state.fetchCurrentWeather);
  const geoCity = useAppStore((state) => state.geoCity);

  const handleOnUnitClick = useCallback((item: (typeof temperatureUnit)[0]) => {
    setSettingConfig({ units: item.value });
    fetchCurrentWeather({ city: geoCity });
  }, []);

  return {
    units: settingConfig.units,
    temperatureUnit,
    handleOnUnitClick,
  };
};

export default useUnits;
