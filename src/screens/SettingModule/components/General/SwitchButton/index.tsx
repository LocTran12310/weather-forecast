import useGeneralSwitch from './hooks';

const SwitchButton = () => {
  const { state, handleOnClick } = useGeneralSwitch();

  const className = state
    ? 'bg-gradient-to-r from-[#5A3FC5] to-[#4628B9] to-70% justify-end transformX(100%)'
    : 'bg-app-dark-grey justify-start';

  return (
    <div
      className={`rounded-full w-10 h-5 py-0.5 px-1 items-center  flex cursor-pointer transition drop-shadow-sm hover:opacity-80 ${className}`}
      onClick={handleOnClick}
    >
      <div className='h-3 w-3 bg-white rounded-full'></div>
    </div>
  );
};

export default SwitchButton;
