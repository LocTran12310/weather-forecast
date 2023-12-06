import { roundTemp } from '@app/screens/HomeModule/components/CurrentWeather';
import { useAppStore } from '@app/stores';
import { Weather } from '@app/types/weather';
import SvgReload from './SvgReload';

type Props = {
  currentWeather: Weather.Data;
};

const CurrentWeather = (props: Props) => {
  const { currentWeather } = props;
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
    <div className='grid grid-cols-[1fr_auto] px-8 relative'>
      <div
        className='absolute -top-4 right-4 translate-x-[50%] cursor-pointer bg-app-rule-grey hover:opacity-70 p-2 rounded-full'
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
          {roundTemp(currentWeather?.main?.temp)}°
        </span>
      </div>
      <div className='w-[70px] filter drop-shadow-xl'>
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
