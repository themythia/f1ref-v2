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
    <div className='flex flex-col md:flex-row md:justify-between rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm text-left sm:w-[calc((100%-8px)/2)] md:w-full h-min'>
      <span className='font-semibold'>{title}</span>
      <span className='text-xs md:text-sm md:text-right'>
        {handleLengthUnit()}
      </span>
    </div>
  );
};
export default CircuitInfoItem;
