import Spinning from '@app/components/Spinning';
import { useAppStore } from '@app/stores';
import React from 'react';
type Props = {
  children?: React.ReactNode;
};

const LayoutContent = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[60%_calc(40%-1rem)] w-full gap-4 transition'>
      {children}
    </div>
  );
};

export default LayoutContent;
