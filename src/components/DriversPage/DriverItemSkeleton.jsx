import clsx from 'clsx';

const DriverItemSkeleton = () => {
  return (
    <div
      className={clsx(
        'bg-bg-50 rounded shadow-2px w-full cursor-pointer duration-200 group col-span-4 flex flex-row items-center h-[84px] group',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'hover:scale-[1.02]',
        'sm:col-span-4',
        'md:col-span-4'
      )}
    >
      <div
        className={clsx(
          'h-full rounded-l aspect-square bg-bg-600 shadow-2px animate-pulse-tw',
          'dark:shadow-2px-dark'
        )}
      ></div>
      <div
        className={clsx(
          'flex flex-row justify-between w-full p-4 animate-pulse-tw',
          'lg:p-6'
        )}
      >
        <div className='h-full rounded-full aspect-square bg-bg-600'></div>
        <div className='flex flex-col w-full '>
          <div className='h-[14px] w-3/5 bg-bg-600 rounded-full mb-[3px]'></div>
          <div className='w-2/5 h-3 rounded-full bg-bg-600'></div>
        </div>
        <div className='self-center w-5 h-5 rounded-full aspect-square bg-bg-600'></div>
      </div>
    </div>
  );
};
export default DriverItemSkeleton;
