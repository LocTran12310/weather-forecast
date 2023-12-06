import SearchInput from './components/SearchInput';

const LayoutHeader = () => {
  return (
    <>
      <div className='flex bg-app-bg-grey lg:bg-transparent rounded-xl items-center gap-0.5'>
        <div className='lg:hidden justify-center px-4'>
          <img src='/vite.svg' alt='Logo' />
        </div>
        <div className='lg:hidden w-[1px] h-[20px] bg-app-grey rounded-full ' />
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
