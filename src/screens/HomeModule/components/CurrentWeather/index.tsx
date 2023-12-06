import SvgReload from '@app/screens/CitiesModule/components/CityCurrentWeather/CurrentWeather/SvgReload';
import { Unit, useAppStore } from '@app/stores';

type Props = {};

export const roundTemp = (temp: number, decimal?: number) => {
  if (typeof temp !== 'number') return temp;
  return Math.round(temp);
};

const unitTempMap = {
  [Unit.EData.standard]: 'K',
  [Unit.EData.metric]: 'C',
  [Unit.EData.imperial]: 'F',
};

const CurrentWeather = (props: Props) => {
  const currentWeather = useAppStore((state) => state.currentWeather);
  const settingConfig = useAppStore((state) => state.settingConfig);
  const mainWeather = currentWeather?.weather?.[0];

  const geoCity = useAppStore((state) => state.geoCity);
  const fetchCurrentWeather = useAppStore((state) => state.fetchCurrentWeather);

  const handleOnReloadClick = () => {
    fetchCurrentWeather({
      city: {
        ...geoCity,
        latitude: currentWeather?.coord?.lat,
        longitude: currentWeather?.coord?.lon,
      },
    });
  };

  return (
    <div className='relative grid grid-cols-[1fr_auto] px-5 mt-5 '>
      <div
        className='absolute -top-5 right-4 translate-x-[50%] cursor-pointer bg-app-rule-grey hover:opacity-70 p-2 rounded-full'
        title='Reload'
        onClick={handleOnReloadClick}
      >
        <SvgReload />
      </div>
      <div className='flex flex-col'>
        <span className='text-3xl font-bold'>{currentWeather?.name}</span>
        <span className='text-app-grey'>
          {mainWeather?.description?.toUpperCase()}
        </span>
        <span className='text-5xl font-bold mt-8'>
          {roundTemp(currentWeather?.main?.temp)}°{' '}
          {unitTempMap[settingConfig?.units]}
        </span>
      </div>
      <div className='w-[90px] lg:w-[150px] filter drop-shadow-xl'>
        <img
          src={`/icons/${mainWeather?.icon}.png`}
          alt='MainWeatherIcon'
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
