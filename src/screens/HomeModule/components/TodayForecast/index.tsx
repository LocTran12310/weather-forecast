import { DateJS } from '@app/core/dayjs';
import { useAppStore } from '@app/stores';
import { Fragment } from 'react';
import CardSection from '../CardSection';
import { roundTemp } from '../CurrentWeather';
import { isLastIndex } from '@app/core/common';

type Props = {};

const TodayForecast = (props: Props) => {
  const hourlyForecast = useAppStore((state) => state.hourlyForecast);
  const items = hourlyForecast?.list?.slice(0, 10);

  return (
    <CardSection title="TODAY'S FORECAST">
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
    </CardSection>
  );
};

export default TodayForecast;
