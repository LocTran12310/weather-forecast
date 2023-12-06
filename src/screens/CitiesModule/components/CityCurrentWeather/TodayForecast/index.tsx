import { isLastIndex } from '@app/core/common';
import { DateJS } from '@app/core/dayjs';
import CardSection from '@app/screens/HomeModule/components/CardSection';
import { roundTemp } from '@app/screens/HomeModule/components/CurrentWeather';
import { HourlyForecast } from '@app/types/hourly-forecast';
import { Fragment } from 'react';

type Props = {
  hourlyForecast: HourlyForecast.Data;
};

const TodayForecast = (props: Props) => {
  const { hourlyForecast } = props;
  const items = hourlyForecast?.list?.slice(0, 10);

  return (
    <>
      <div className='text-title font-semibold text-sm mb-4'>
        3-DAY FORECAST
      </div>
      <div className='pb-2 w-full flex overflow-x-auto gap-2 scrollbar-horizontal'>
        {items?.map((item, index: number) => {
          const mainWeather = item?.weather?.[0];

          return (
            <Fragment key={item?.dt}>
              <div className='grid grid-rows-[auto_1fr_auto] min-w-[96px] items-center justify-center'>
                <div className='text-app-grey text-center'>
                  {DateJS.getFormatDate(item?.dt_txt, 'h:mm A')}
                </div>
                <div className='w-[60px] filter drop-shadow-xl'>
                  <img
                    src={`/icons/${mainWeather?.icon}.png`}
                    alt={`/icons/${mainWeather?.icon}.png`}
                    className='object-contain filter'
                  />
                </div>
                <span className='text-2xl font-semibold text-center'>
                  {roundTemp(item?.main?.temp)}°
                </span>
              </div>
              {!isLastIndex(index, items) ? (
                <div className='border-l-[1px] border-solid border-app-rule-grey'></div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default TodayForecast;
