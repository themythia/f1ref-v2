const TeamItemSkeleton = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark w-full cursor-pointer hover:scale-[1.02] duration-200 group col-span-4 sm:col-span-4 md:col-span-6 xl:col-span-4 flex flex-row items-center h-[84px]'>
      <div className='rounded-l relative shadow-2px dark:shadow-2px-dark flex flex-row items-end h-full aspect-square bg-bg-600 animate-pulse-tw'></div>
      <div className='flex flex-col w-full animate-pulse-tw px-4 md:px-6'>
        <div className='h-[14px] w-3/5 bg-bg-600 rounded-full mb-[3px]'></div>
        <div className='h-3 w-2/5 bg-bg-600 rounded-full'></div>
      </div>
    </div>
  );
};
export default TeamItemSkeleton;
