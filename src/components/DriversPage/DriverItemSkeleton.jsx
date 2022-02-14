const DriverItemSkeleton = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px max-w-full md:w-[calc((100%-16px)/2)] lg:w-[calc(50%-12px)] xl:w-[calc((100%-48px)/3)] 2xl:w-[calc((100%-72px)/4)] cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center'>
      <div className='w-full aspect-square bg-bg-600 animate-pulse-tw rounded-t'></div>
      <div className='flex flex-row w-full p-4 lg:p-6 justify-between animate-pulse-tw'>
        <div className='h-9 w-9 aspect-square rounded-full bg-bg-600'></div>
        <div className='flex flex-col w-full items-center '>
          <div className='h-[14px] w-3/5 bg-bg-600 rounded-full mb-[3px]'></div>
          <div className='h-3 w-2/5 bg-bg-600 rounded-full'></div>
        </div>
        <div className='h-9 w-9 aspect-square rounded-full bg-bg-600'></div>
      </div>
    </div>
  );
};
export default DriverItemSkeleton;
