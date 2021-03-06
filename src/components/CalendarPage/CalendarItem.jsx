import Flag from '../shared/Flag';
import { Link } from 'react-router-dom';

const CalendarItem = ({ race }) => {
  const event = new Date(race?.date + 'T' + race.time);
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <Link
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-px-dark p-4 md:p-6 w-full cursor-pointer hover:scale-[1.02] hover:shadow-8px dark:hover:shadow-8px-dark duration-200 group col-span-4 sm:col-span-4 md:col-span-6 xl:col-span-4'
      to={`/calendar/${race.round}`}
    >
      <div className='flex flex-row font-poppins text-sm justify-between'>
        <span className='text-left'>{`Round ${race.round}`}</span>
        <span className='text-right'>
          {event.toLocaleDateString('en-GB', options)}
        </span>
      </div>
      <div className='flex flex-row gap-x-4 items-center mt-2 md:mt-3'>
        <Flag size='26' country={race.countryCode} />
        <div className='flex flex-col font-openSans'>
          <span className='text-sm font-semibold'>{race.raceName}</span>
          <span className='text-xs'>{race.circuitName}</span>
        </div>
      </div>
    </Link>
  );
};
export default CalendarItem;
