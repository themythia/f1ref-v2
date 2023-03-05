import clsx from 'clsx';
import { useSelector } from 'react-redux';

const CircuitInfoItem = ({ title, info }) => {
  const unit = useSelector((store) => store.settings.unit);

  const handleLengthUnit = () => {
    if (title === 'Lap Length' || title === 'Race Distance') {
      if (unit === 'km') return `${info} ${unit}`;
      else if (unit === 'mile') return `${(info / 1.609).toFixed(3)} ${unit}s`;
    } else return info;
  };

  return (
    <div
      className={clsx(
        'flex flex-col rounded shadow-2px bg-bg-200 p-2 font-openSans text-sm text-left h-min',
        'sm:w-[calc((100%-8px)/2)]',
        'dark:shadow-2px-dark dark:bg-bg-900',
        'md:flex-row md:justify-between md:w-full'
      )}
    >
      <span className='font-semibold'>{title}</span>
      <span className='text-xs md:text-sm md:text-right'>
        {handleLengthUnit()}
      </span>
    </div>
  );
};
export default CircuitInfoItem;
