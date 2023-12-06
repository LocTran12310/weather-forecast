import { getUniqueDays, isLastIndex } from '@app/core/common';
import { DateJS } from '@app/core/dayjs';
import { roundTemp } from '@app/screens/HomeModule/components/CurrentWeather';
import { HourlyForecast } from '@app/types/hourly-forecast';
import { Fragment } from 'react';

type Props = {
  hourlyForecast: HourlyForecast.Data;
};

const ThreeDayForecast = (props: Props) => {
  const { hourlyForecast } = props;
  const items = getUniqueDays(hourlyForecast?.list || [])?.slice(0, 3);

  return (
    <div className='grid grid-rows w-full gap-4'>
      {items.map((item, index) => {
        const dayOfWeek =
          index === 0
            ? 'Today'
            : DateJS.getFormatDate(item?.dt_txt, 'ddd', 'Today');
        const mainWeather = item?.weather?.[0];

        return (
          <Fragment key={item?.dt}>
            <div className='grid grid-cols-[1fr_1fr_1fr] gap-2 items-center'>
              <div className='text-start text-app-grey'>{dayOfWeek}</div>
              <div className='grid grid-cols-[1fr_1fr] font-semibold gap-3 items-center'>
                <div className='w-[50px] justify-self-end filter drop-shadow-xl'>
                  <img
                    src={`/icons/${mainWeather?.icon}.png`}
                    alt={`/icons/${mainWeather?.icon}.png`}
                    className='object-contain'
                  />
                </div>
                <div>{mainWeather?.main}</div>
              </div>
              <div className='text-end text-app-grey'>
                <span className='font-semibold'>
                  {roundTemp(item?.main?.temp_max)}
                </span>
                /{roundTemp(item?.main?.temp_min)}
              </div>
            </div>
            {!isLastIndex(index, items) ? <hr className='w-full' /> : null}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ThreeDayForecast;
