const CircuitInfoItem = ({ title, info }) => {
  return (
    <div className='flex flex-col rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm text-left sm:w-[calc((100%-8px)/2)]'>
      <span className='font-semibold'>{title}</span>
      <span className='text-xs'>{info}</span>
    </div>
  );
};
export default CircuitInfoItem;
