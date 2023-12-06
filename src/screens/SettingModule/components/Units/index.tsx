import CardSection from '@app/screens/HomeModule/components/CardSection';
import useUnits from './hooks';

type Props = {};

const Units = (props: Props) => {
  const { units, temperatureUnit, handleOnUnitClick } = useUnits();

  return (
    <>
      <div className='font-semibold text-xl mb-3'>Units</div>
      <CardSection title='TEMPERATURE'>
        <div className='rounded-md bg-app-dark-grey p-1'>
          <div className='grid grid-cols-2 gap-2'>
            {temperatureUnit.map((item) => {
              return (
                <div
                  key={item.value}
                  className={`rounded text-center text-app-dark-blue cursor-pointer hover:opacity-80 transition ${
                    item.value === units ? 'font-semibold bg-app-rule-grey' : ''
                  }`}
                  onClick={() => handleOnUnitClick(item)}
                >
                  {item?.label}
                </div>
              );
            })}
          </div>
        </div>
      </CardSection>
    </>
  );
};

export default Units;
