import clsx from 'clsx';

const CalendarItemSkeleton = () => {
  return (
    <div
      className={clsx(
        'bg-bg-50 rounded shadow-2px p-4 w-full cursor-pointer duration-200 group col-span-4 h-24 flex flex-col justify-center',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'hover:scale-[1.02] hover:shadow-8px',
        'dark:hover:shadow-8px-dark',
        'sm:col-span-4',
        'md:p-6 md:col-span-6',
        'lg:h-[120px]',
        'xl:col-span-4'
      )}
    >
      <div className='flex flex-row justify-between animate-pulse-tw'>
        <div className='bg-bg-600 w-1/5 h-[14px] rounded-full'></div>
        <div className='bg-bg-600 w-2/5 h-[14px] rounded-full'></div>
      </div>
      <div
        className={clsx(
          'flex flex-row w-full mt-2 gap-x-4 animate-pulse-tw',
          'md:mt-3'
        )}
      >
        <div
          className={clsx(
            'rounded-full bg-bg-600 h-9 w-9 shadow-4px',
            'dark:shadow-4px-dark'
          )}
        ></div>
        <div className='flex flex-col justify-center w-4/5'>
          <div className='bg-bg-600 h-[14px] w-3/5 rounded-full'></div>
          <div className='bg-bg-600 h-[12px] w-4/5 rounded-full mt-[3px]'></div>
        </div>
      </div>
    </div>
  );
};
export default CalendarItemSkeleton;
