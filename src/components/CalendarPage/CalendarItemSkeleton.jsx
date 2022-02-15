const CalendarItemSkeleton = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group col-span-4 sm:col-span-4 md:col-span-6 xl:col-span-4 h-24 lg:h-[120px] flex flex-col justify-center'>
      <div className='flex flex-row justify-between animate-pulse-tw'>
        <div className='bg-bg-600 w-1/5 h-[14px] rounded-full'></div>
        <div className='bg-bg-600 w-2/5 h-[14px] rounded-full'></div>
      </div>
      <div className='flex flex-row gap-x-4 mt-2 md:mt-3 w-full animate-pulse-tw'>
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
