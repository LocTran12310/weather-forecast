import Card from '@app/components/Card';
import CityItem from '../CityItem';
import useCitiesRecents from './hooks';

type Props = {};

const CitiesRecents = (props: Props) => {
  const { idRecentActive, items, handleOnClick, handleOnClose } =
    useCitiesRecents();

  return (
    <div className='flex flex-col gap-3'>
      {items?.map((item) => {
        const id = item?.currentWeather?.id;
        const isActive = id === idRecentActive;

        return (
          <Card
            hoverable
            clearable
            isActive={isActive}
            onClick={() => handleOnClick(id)}
            onClose={(e) => handleOnClose(e, id)}
            key={id}
          >
            <CityItem item={item} />
          </Card>
        );
      })}
    </div>
  );
};

export default CitiesRecents;
