import { useAppStore } from '@app/stores';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import ThreeDayForecast from './ThreeDayForecast';

const CityCurrentInfo = () => {
  const recents = useAppStore((state) => state.recents);
  const idRecentActive = useAppStore((state) => state.idRecentActive);

  const item = recents?.[idRecentActive];
  if (!item) {
    return <></>;
  }

  const { currentWeather, hourlyForecast } = item;
  return (
    <div className='p-2'>
      <CurrentWeather currentWeather={currentWeather} />
      <hr className='my-6' />
      <TodayForecast hourlyForecast={hourlyForecast} />
      <hr className='my-6' />
      <ThreeDayForecast hourlyForecast={hourlyForecast} />
    </div>
  );
};

export default CityCurrentInfo;
