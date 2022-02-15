const DriverItemSkeleton = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px w-full cursor-pointer hover:scale-[1.02] duration-200 group col-span-4 sm:col-span-4 md:col-span-4 flex flex-row items-center h-[84px] group'>
      <div className='h-full aspect-square bg-bg-600 shadow-2px animate-pulse-tw rounded-l'></div>
      <div className='flex flex-row w-full p-4 lg:p-6 justify-between animate-pulse-tw'>
        <div className='h-full aspect-square rounded-full bg-bg-600'></div>
        <div className='flex flex-col w-full '>
          <div className='h-[14px] w-3/5 bg-bg-600 rounded-full mb-[3px]'></div>
          <div className='h-3 w-2/5 bg-bg-600 rounded-full'></div>
        </div>
        <div className='w-5 h-5 aspect-square rounded-full self-center bg-bg-600'></div>
      </div>
    </div>
  );
};
export default DriverItemSkeleton;
