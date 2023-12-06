type Props = {};

const SvgReload = (props: Props) => {
  const className = 'svg-reload';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 512 512'
      className='object-contain'
    >
      <title>Reload</title>
      <path
        d='M320,146s24.36-12-64-12A160,160,0,1,0,416,294'
        className={className}
      />
      <polyline points='256 58 336 138 256 218' className={className} />
    </svg>
  );
};

export default SvgReload;
