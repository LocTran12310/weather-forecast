import React from 'react';
import SvgSpin from './SvgSpin';

type Props = {
  children: React.ReactNode;
  spinning: boolean;
};

const Spinning = (props: Props) => {
  const { children, spinning } = props;

  return spinning ? (
    <div className='relative w-full h-full max-h-screen'>
      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[rgba(255,255,255,0.5)] z-20'></div>
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30'>
        <SvgSpin />
      </div>
      {children}
    </div>
  ) : (
    children
  );
};

export default Spinning;
