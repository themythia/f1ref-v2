const CalendarItemSkeleton = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 lg:p-6 max-w-full md:w-[calc(50%-8px)] h-24 lg:h-[120px] flex flex-col justify-center'>
      <div className='flex flex-row justify-between animate-pulse-tw'>
        <div className='bg-bg-600 w-1/5 h-[14px] rounded-full'></div>
        <div className='bg-bg-600 w-2/5 h-[14px] rounded-full'></div>
      </div>
      <div className='flex flex-row gap-x-4 mt-2 lg:mt-4 w-full animate-pulse-tw'>
        <div className='bg-bg-600 h-9 w-9 rounded-full shadow-4px'></div>
        <div className='flex flex-col w-4/5 justify-center'>
          <div className='bg-bg-600 h-[14px] w-3/5 rounded-full'></div>
          <div className='bg-bg-600 h-[12px] w-4/5 rounded-full mt-[3px]'></div>
        </div>
      </div>
    </div>
  );
};
export default CalendarItemSkeleton;
