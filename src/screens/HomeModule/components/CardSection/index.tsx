import React from 'react';

type Props = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  extend?: React.ReactNode;
};

const CardSection = (props: Props) => {
  const { children, title, extend } = props;
  return (
    <div className='bg-app-bg-grey rounded-xl p-4'>
      <div className='grid grid-cols-[1fr_auto] items-center'>
        {title && (
          <div className='text-title font-semibold text-sm mb-4'>{title}</div>
        )}
        {extend}
      </div>
      {children}
    </div>
  );
};

export default CardSection;
