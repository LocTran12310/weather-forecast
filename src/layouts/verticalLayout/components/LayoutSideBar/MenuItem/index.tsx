import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { IMenuSideBar } from '../Menu';

type Props = {
  item: IMenuSideBar;
};

const MenuItem = (props: Props) => {
  const { item } = props;

  return (
    <NavLink
      id={item.key}
      to={item.slug}
      className={({ isActive }) => {
        return `flex flex-col items-center ${isActive ? 'font-bold' : ''}`;
      }}
    >
      {({ isActive }) => {
        return isActive ? (
          <>
            {item.icon &&
              item?.icon({ className: 'transition fill-app-black' })}
            <span className='text-app-black transition'>{item.label}</span>
          </>
        ) : (
          <>
            {item.icon && item?.icon({ className: 'transition fill-app-grey' })}
            <span className='text-app-grey transition'>{item.label}</span>
          </>
        );
      }}
    </NavLink>
  );
};

export default memo(MenuItem);
