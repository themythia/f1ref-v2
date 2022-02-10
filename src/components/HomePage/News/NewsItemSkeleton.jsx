const NewsItemSkeleton = () => {
  // created animate-pulse-tw class that's similar to tailwind's animate-pulse due to animate.css pulse taking over
  return (
    <div className='flex flex-row items-center w-full rounded shadow-2px bg-bg-200 dark:bg-bg-900'>
      <div className='basis-2/5 bg-bg-600 h-20 shadow-2px rounded animate-pulse-tw'></div>
      <div className='basis-3/5 p-2 w-full h-full flex flex-col justify-start self-start animate-pulse-tw'>
        <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
        <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
        <div className='bg-bg-600 w-2/3 h-[14px] my-[3px] rounded-full'></div>
      </div>
    </div>
  );
};
export default NewsItemSkeleton;
