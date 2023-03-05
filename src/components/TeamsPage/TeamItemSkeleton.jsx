import clsx from 'clsx';

const TeamItemSkeleton = () => {
  return (
    <div
      className={clsx(
        'bg-bg-50  rounded shadow-2px w-full cursor-pointer duration-200 group col-span-4 flex flex-row items-center h-[84px]',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'hover:scale-[1.02]',
        'sm:col-span-4',
        'md:col-span-6',
        'xl:col-span-4'
      )}
    >
      <div
        className={clsx(
          'rounded-l relative shadow-2px flex flex-row items-end h-full aspect-square bg-bg-600 animate-pulse-tw',
          'dark:shadow-2px-dark'
        )}
      ></div>
      <div
        className={clsx(
          'flex flex-col w-full animate-pulse-tw px-4',
          'md:px-6'
        )}
      >
        <div className='h-[14px] w-3/5 bg-bg-600 rounded-full mb-[3px]'></div>
        <div className='w-2/5 h-3 rounded-full bg-bg-600'></div>
      </div>
    </div>
  );
};
export default TeamItemSkeleton;
