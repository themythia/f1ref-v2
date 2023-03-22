import clsx from 'clsx';
import { Link } from 'react-router-dom';
import teamColors from '../../utils/teamColors';

const DriverItem = ({ driver, forTeamPage }) => {
  return (
    <Link
      className={clsx(
        'rounded shadow-2px w-full cursor-pointer duration-200 group col-span-4 flex flex-row items-center h-[84px]',
        'dark:shadow-2px-dark',
        'hover:scale-[1.02]',
        'sm:col-span-4',
        'md:col-span-6',
        {
          'bg-bg-200 dark:bg-bg-900 xl:col-span-6': forTeamPage,
          'bg-bg-50 dark:bg-bg-800 xl:col-span-4': !forTeamPage,
        }
      )}
      to={`/drivers/${driver.id.replace(/_/gi, '-')}`}
      data-testid='driver-item'
    >
      <div
        className={clsx(
          'rounded-l relative shadow-2px flex flex-row items-end h-full aspect-square',
          'dark:shadow-2px-dark',
          teamColors(driver.teamCode)
        )}
      >
        <img
          src={driver.image.profile}
          alt={driver.name}
          className='-scale-x-100 max-h-[84px]'
        />
      </div>
      <div
        className={clsx(
          'flex flex-row items-center w-full px-4 gap-x-4',
          'md:px-6'
        )}
      >
        <div className='flex flex-col w-full font-openSans'>
          <span className='text-sm font-semibold'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
        <span className='text-lg font-poppins'>{driver.no}</span>
      </div>
    </Link>
  );
};
export default DriverItem;
