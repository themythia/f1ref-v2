import clsx from 'clsx';
import { IoWarningOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return (
    <main
      className={clsx(
        'p-4 row-start-2 row-end-3 animate__animated animate__fadeIn',
        'sm:p-8',
        'md:p-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      <div
        className={clsx(
          'bg-bg-50 rounded shadow-2px p-4 w-full flex flex-col justify-center items-center h-full gap-y-2',
          'dark:bg-bg-800 dark:shadow-2px-dark',
          'md:p-6 md:gap-y-3'
        )}
      >
        <IoWarningOutline size={40} />
        <p className='text-3xl font-poppins '>404</p>
        <p className='text-xl font-openSans '>Page not found</p>
        <Link to='/'></Link>
      </div>
    </main>
  );
};
export default FourOhFour;
