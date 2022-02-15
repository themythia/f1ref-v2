import { useNavigate } from 'react-router-dom';
import slug from 'slug';
import teamColors from '../../utils/teamColors';

const DriverItem = ({ driver }) => {
  const navigate = useNavigate();

  return (
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px w-full cursor-pointer hover:scale-[1.02] duration-200 group col-span-4 sm:col-span-4 md:col-span-4 flex flex-row items-center h-[84px]'
      onClick={() => navigate(`/drivers/${slug(driver.id)}`)}
    >
      <div
        className={`${teamColors(
          driver.teamCode
        )} rounded-l relative shadow-2px flex flex-row items-end h-full aspect-square`}
      >
        <img
          src={driver.image}
          alt={driver.name}
          loading='lazy'
          className='-scale-x-100 max-h-20'
        />
      </div>
      <div className='flex flex-row gap-x-4 w-full px-4 md:px-6 items-center'>
        <div className='flex flex-col font-openSans w-full'>
          <span className='font-semibold text-sm'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
        <span className='text-lg font-poppins'>{driver.no}</span>
      </div>
    </div>
  );
};
export default DriverItem;
