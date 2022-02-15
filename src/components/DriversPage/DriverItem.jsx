import Flag from '../shared/Flag';
import { useNavigate } from 'react-router-dom';
import slug from 'slug';
import teamColors from '../../utils/teamColors';

const DriverItem = ({ driver }) => {
  const navigate = useNavigate();

  return (
    // <div
    //   className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px w-full cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center'
    //   onClick={() => navigate(`/calendar/${slug(driver.id)}`)}
    // >
    //   <div
    //     className={`${teamColors(
    //       driver.teamCode
    //     )} rounded-t relative shadow-2px p-4 pb-0`}
    //   >
    //     <img src={driver.image} alt={driver.name} loading='lazy' />
    //   </div>
    //   <div className='flex flex-row  gap-x-4 items-center w-full p-4 lg:p-6'>
    //     <span className='text-3xl font-poppins inline-block min-w-[36px] text-center'>
    //       {driver.no}
    //     </span>
    //     <div className='flex flex-col font-openSans text-center w-full'>
    //       <span className='font-semibold text-sm'>{driver.name}</span>
    //       <span className='text-xs'>{driver.team}</span>
    //     </div>
    //     <Flag size='36' country={driver.countryCode} />
    //   </div>
    // </div>
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px w-full cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center p-2 lg:p-3 gap-y-2 lg:gap-y-3'
      onClick={() => navigate(`/calendar/${slug(driver.id)}`)}
    >
      <div
        className={`${teamColors(
          driver.teamCode
        )} rounded-full relative shadow-2px`}
      >
        <img
          src={driver.image}
          alt={driver.name}
          loading='lazy'
          className='rounded-full'
        />
        <span className='absolute text-lg font-poppins inline-block aspect-square w-10 text-center bg-bg-200 bottom-0 left-[5%] rounded-full shadow-4px leading-10'>
          {driver.no}
        </span>
      </div>
      <div className='flex flex-row  gap-x-4 items-center w-full'>
        <div className='flex flex-col font-openSans text-center w-full'>
          <span className='font-semibold text-sm'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
      </div>
    </div>
  );
};
export default DriverItem;
