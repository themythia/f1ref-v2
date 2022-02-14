import Flag from '../shared/Flag';
import { useNavigate } from 'react-router-dom';
import slug from 'slug';
import teamColors from '../../utils/teamColors';

const DriverItem = ({ driver }) => {
  const navigate = useNavigate();

  return (
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px max-w-full md:w-[calc((100%-16px)/2)] lg:w-[calc(50%-12px)] xl:w-[calc((100%-48px)/3)] 2xl:w-[calc((100%-72px)/4)] cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center'
      onClick={() => navigate(`/calendar/${slug(driver.id)}`)}
    >
      <div
        className={`${teamColors(
          driver.teamCode
        )} rounded-t relative shadow-2px p-4 pb-0`}
      >
        <img src={driver.image} alt={driver.name} loading='lazy' />
      </div>
      <div className='flex flex-row  gap-x-4 items-center w-full p-4 lg:p-6'>
        <span className='text-3xl font-poppins inline-block min-w-[36px] text-center'>
          {driver.no}
        </span>
        <div className='flex flex-col font-openSans text-center w-full'>
          <span className='font-semibold text-sm'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
        <Flag size='36' country={driver.countryCode} />
      </div>
    </div>
  );
};
export default DriverItem;
