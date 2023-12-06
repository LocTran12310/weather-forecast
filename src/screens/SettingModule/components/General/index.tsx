import CardSection from '@app/screens/HomeModule/components/CardSection';
import SwitchButton from './SwitchButton';

type Props = {};

const General = (props: Props) => {
  return (
    <>
      <div className='font-semibold text-xl my-3'>General</div>
      <CardSection>
        <div className='grid grid-cols-[1fr_auto] gap-4'>
          <div>
            <span className='font-semibold mb-2'>Location</span>
            <div className='text-app-grey'>Get weather of your location</div>
          </div>
          <SwitchButton />
        </div>
      </CardSection>
    </>
  );
};

export default General;
