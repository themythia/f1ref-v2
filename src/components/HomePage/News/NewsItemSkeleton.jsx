import clsx from 'clsx';
import { Fragment } from 'react';

const NewsItemSkeleton = ({ size }) => {
  // created animate-pulse-tw class that's similar to tailwind's animate-pulse due to animate.css pulse taking over
  return (
    <>
      <div
        className={clsx(
          'flex flex-row items-center w-full rounded shadow-2px bg-bg-200',
          'dark:shadow-2px-dark dark:bg-bg-900',
          'sm:hidden'
        )}
      >
        <div
          className={clsx(
            'rounded basis-2/5 bg-bg-600 shadow-2px animate-pulse-tw aspect-3/2',
            'dark:shadow-2px-dark'
          )}
        ></div>
        <div className='flex flex-col self-start justify-start w-full h-full p-2 basis-3/5 animate-pulse-tw'>
          <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
          <div className='bg-bg-600 w-full h-[14px] my-[3px] rounded-full'></div>
          <div className='bg-bg-600 w-2/3 h-[14px] my-[3px] rounded-full'></div>
        </div>
      </div>
      <div
        className={clsx(
          'hidden relative rounded shadow-2px bg-bg-200 aspect-3/2',
          'dark:shadow-2px-dark dark:bg-bg-900',
          'sm:block',
          {
            'w-[calc((100%-8px)/2)] md:w-[calc((100%-12px)/2)]': size === 'big',
            'w-[calc((100%-16px)/3)] md:w-[calc((100%-24px)/3)]':
              size === 'small',
          }
        )}
      >
        <div className='absolute bottom-0 w-full h-16 p-4 rounded bg-gradient-to-t from-bg-800'>
          <div className='bg-bg-50 w-full h-[14px] my-[3px] rounded-full animate-pulse-tw'></div>
          <div className='bg-bg-50 w-2/3 h-[14px] my-[3px] rounded-full animate-pulse-tw'></div>
        </div>
      </div>
    </>
  );
};
export default NewsItemSkeleton;
