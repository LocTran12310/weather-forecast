import { useEffect } from 'react';
import CitiesRecents from './components/CitiesRecents';
import CityCurrentInfo from './components/CityCurrentWeather';
import { useAppStore } from '@app/stores';

const CitiesModule = () => {
  const idRecentActive = useAppStore((state) => state.idRecentActive);
  const setRecentActive = useAppStore((state) => state.setRecentActive);
  const recents = useAppStore((state) => state.recents);

  useEffect(() => {
    if (idRecentActive) return;
    if (!Object.keys(recents)?.length) return;
    const idFirst = parseInt(Object.keys(recents)?.[0], 10);
    setRecentActive(idFirst);
  }, []);

  if (!Object.keys(recents)?.length) {
    return (
      <div className='text-md text-app-grey p-4'>No data available ...</div>
    );
  }

  return (
    <>
      <div className='w-full'>
        <CitiesRecents />
      </div>
      <div className='w-full mt-4 lg:mt-0'>
        <CityCurrentInfo />
      </div>
    </>
  );
};

export default CitiesModule;
