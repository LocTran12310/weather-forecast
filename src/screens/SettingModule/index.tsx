import General from './components/General';
import Units from './components/Units';

type Props = {};

const SettingModule = (props: Props) => {
  return (
    <>
      <div className='w-full'>
        <Units />

        <General />
      </div>
      <div className='w-full hidden lg:block'>
        <img
          src='https://assets.api.uizard.io/api/cdn/stream/0c363d67-846f-41b5-9ccb-6261c602667e.png'
          alt='MapImage'
        />
      </div>
    </>
  );
};

export default SettingModule;
