import AirConditions from './components/AirConditions';
import CurrentWeather from './components/CurrentWeather';
import FiveDayForecast from './components/FiveDayForecast';
import TodayForecast from './components/TodayForecast';

type Props = {};

const HomeModule = (props: Props) => {
  return (
    <>
      <div className='flex flex-col w-full gap-3'>
        <CurrentWeather />
        <TodayForecast />
        <AirConditions />
      </div>
      <div className='w-full'>
        <FiveDayForecast />
      </div>
    </>
  );
};

export default HomeModule;
