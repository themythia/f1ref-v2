import { Link } from 'react-router-dom';
import teamColors from '../../utils/teamColors';

const DriverItem = ({ driver, forTeamPage }) => {
  return (
    <Link
      className={`${
        forTeamPage
          ? 'bg-bg-200 dark:bg-bg-900 xl:col-span-6'
          : 'bg-bg-50 dark:bg-bg-800 xl:col-span-4'
      } rounded shadow-2px dark:shadow-2px-dark w-full cursor-pointer hover:scale-[1.02] duration-200 group col-span-4 sm:col-span-4 md:col-span-6 flex flex-row items-center h-[84px]`}
      to={`/drivers/${driver.id.replace(/_/gi, '-')}`}
    >
      <div
        className={`${teamColors(
          driver.teamCode
        )} rounded-l relative shadow-2px dark:shadow-2px-dark flex flex-row items-end h-full aspect-square`}
      >
        <img
          src={driver.image.profile}
          alt={driver.name}
          className='-scale-x-100 max-h-[84px]'
        />
      </div>
      <div className='flex flex-row gap-x-4 w-full px-4 md:px-6 items-center'>
        <div className='flex flex-col font-openSans w-full'>
          <span className='font-semibold text-sm'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
        <span className='text-lg font-poppins'>{driver.no}</span>
      </div>
    </Link>
  );
};
export default DriverItem;
