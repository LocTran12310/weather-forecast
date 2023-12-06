import Menu from './Menu';

const LayoutSideBar = () => {
  return (
    <aside className='sticky left-0 top-0 bottom-0 w-full lg:w-[100px] lg:left-0 lg:bottom-0 lg:right-0 bg-app-bg-grey rounded-xl p-2 z-10 lg:my-4 lg:ml-4'>
      <div className='hidden lg:flex justify-center p-4 mb-12'>
        <img src='/vite.svg' alt='Logo' />
      </div>
      <Menu />
    </aside>
  );
};

export default LayoutSideBar;
