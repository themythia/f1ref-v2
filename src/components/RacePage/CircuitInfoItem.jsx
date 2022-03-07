const CircuitInfoItem = ({ title, info }) => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm text-left sm:w-[calc((100%-8px)/2)] md:w-full h-min'>
      <span className='font-semibold'>{title}</span>
      <span className='text-xs md:text-sm md:text-right'>{info}</span>
    </div>
  );
};
export default CircuitInfoItem;
