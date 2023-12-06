import { DateJS } from '@app/core/dayjs';
import { roundTemp } from '@app/screens/HomeModule/components/CurrentWeather';
import { HourlyForecast } from '@app/types/hourly-forecast';
import { Weather } from '@app/types/weather';

type Props = {
  item: {
    currentWeather: Weather.Data;
    hourlyForecast: HourlyForecast.Data;
  };
};

const CityItem = (props: Props) => {
  const { item } = props;
  const { currentWeather } = item;

  return (
    <div className='grid grid-cols-[48px_1fr_auto] gap-4 p-2'>
      <div className='w-12 flex justify-center items-center'>
        <img src={`/icons/${currentWeather?.weather?.[0].icon}.png`} alt='' />
      </div>
      <div className='flex flex-col'>
        <span className='text-xl font-semibold'>{currentWeather?.name}</span>
        <span className='text-sm text-app-grey'>
          {DateJS.getUnixDateFormat(currentWeather?.dt, 'hh:mm A')}
        </span>
      </div>
      <div className='text-2xl text-app-grey'>
        {roundTemp(currentWeather?.main?.temp)}°
      </div>
    </div>
  );
};

export default CityItem;
