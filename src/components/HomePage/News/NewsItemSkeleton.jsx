import { Fragment } from 'react';

const NewsItemSkeleton = ({ size }) => {
  // created animate-pulse-tw class that's similar to tailwind's animate-pulse due to animate.css pulse taking over
  return (
    <Fragment>
      <div className='flex flex-row items-center w-full rounded shadow-2px bg-bg-200 dark:bg-bg-900 sm:hidden'>
        <div className='basis-2/5 bg-bg-600 shadow-2px rounded animate-pulse-tw aspect-3/2'></div>
        <div className='basis-3/5 p-2 w-full h-full flex flex-col justify-start self-start animate-pulse-tw'>
          <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
          <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
          <div className='bg-bg-600 w-2/3 h-[14px] my-[3px] rounded-full'></div>
        </div>
      </div>
      <div
        className={`hidden sm:block relative rounded shadow-2px bg-bg-200 dark:bg-bg-900 aspect-3/2 ${
          size === 'big'
            ? 'w-[calc((100%-8px)/2)] md:w-[calc((100%-12px)/2)]'
            : 'w-[calc((100%-16px)/3)] md:w-[calc((100%-24px)/3)]'
        }`}
      >
        <div className='w-full h-16 rounded absolute bottom-0 bg-gradient-to-t from-bg-800 p-4'>
          <div className='bg-bg-50 w-full h-[14px] my-[3px] rounded-full animate-pulse-tw'></div>
          <div className='bg-bg-50 w-2/3 h-[14px] my-[3px] rounded-full animate-pulse-tw'></div>
        </div>
      </div>
    </Fragment>
  );
};
export default NewsItemSkeleton;
