import clsx from 'clsx';
import { IoWarning } from 'react-icons/io5';
const Error = () => {
  return (
    <div
      className={clsx(
        'px-4 py-2 w-screen h-auto bg-red-600 fixed z-40 top-14 left-0 flex flex-row items-center justify-center font-openSans text-bg-50 text-sm gap-x-4 shadow-2px animate__animated animate__fadeIn',
        'dark:shadow-2px-dark',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      <div>
        <IoWarning className='w-8 h-8' />
      </div>
      <p>
        Whoops, it seems something went wrong. Please refresh the page or try
        again later.
      </p>
    </div>
  );
};
export default Error;
