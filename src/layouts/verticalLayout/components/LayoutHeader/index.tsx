import SearchInput from './components/SearchInput';

type Props = {};

const LayoutHeader = (props: Props) => {
  return (
    <>
      <div className='grid grid-cols-[auto_auto_1fr] bg-app-bg-grey lg:flex  lg:bg-transparent rounded-xl items-center'>
        <div className='lg:hidden justify-center px-4'>
          <img src='/vite.svg' alt='Logo' />
        </div>
        <div className='lg:hidden w-[1px] h-[60%] bg-app-grey rounded-full ' />
        <div className='grid grid-cols-1 lg:grid-cols-[60%] w-full gap-4'>
          <div className='w-full  bg-app-bg-grey rounded-xl relative'>
            <SearchInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutHeader;
