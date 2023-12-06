import React from 'react';

type Props = {
  item: { icon: React.ReactNode; label: string; value: string | number };
};

const AirConditionsItem = (props: Props) => {
  const { item } = props;
  return (
    <div className='grid grid-cols-[auto_1fr] gap-2'>
      <div className='w-[20px]'>
        {item.icon}
        {/* <img src='/vite.svg' alt='' className='object-contain' /> */}
      </div>
      <div className='flex flex-col'>
        <span className='text-app-grey'>{item.label}</span>
        <span className='font-semibold text-2xl'>{item.value}</span>
      </div>
    </div>
  );
};

export default AirConditionsItem;
