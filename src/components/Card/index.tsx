import React from 'react';

type Props = {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  isActive?: boolean;
  clearable?: boolean;
  onClick?: () => void;
  onClose?: (e: any) => void;
};

const Card = (props: Props) => {
  const {
    hoverable = false,
    isActive = false,
    className = '',
    clearable = false,

    children,
    onClick,
    onClose,
  } = props;
  const classNameHoverable = hoverable ? 'cursor-pointer hover:opacity-80' : '';
  const classNameActive = isActive
    ? 'bg-app-bg-grey-primary outline-[#5A3FC5] outline'
    : '';

  const classClearable = clearable ? 'opacity-0 group-hover:opacity-100' : '';

  return (
    <div
      className={`group relative bg-app-bg-grey rounded-xl p-4  ${classNameHoverable} ${classNameActive} ${className}`}
      onClick={onClick}
    >
      {clearable && (
        <div
          className={`absolute -top-2 -right-2 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-white transition duration-50 ${classClearable}`}
          onClick={onClose}
        >
          x
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
