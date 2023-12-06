import Spinning from '@app/components/Spinning';
import LayoutContent from './components/LayoutContent';
import LayoutHeader from './components/LayoutHeader';
import LayoutSideBar from './components/LayoutSideBar';
import { useAppStore } from '@app/stores';

type Props = { children: React.ReactNode };

const VerticalLayout = ({ children }: Props) => {
  const loading = useAppStore((state) => state.loading);
  return (
    <Spinning spinning={loading}>
      <div className='min-h-screen flex flex-col-reverse lg:flex-row flex-auto bg-app-bg-grey-primary'>
        <LayoutSideBar />
        <div className='flex flex-col gap-4 flex-auto w-full lg:w-0 p-4'>
          <LayoutHeader />
          <LayoutContent>{children}</LayoutContent>
        </div>
      </div>
    </Spinning>
  );
};

export default VerticalLayout;
