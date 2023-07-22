import Flag from '../shared/Flag';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
      className={clsx(
        'bg-bg-50 rounded shadow-2px p-4 w-full cursor-pointer duration-200 group col-span-4',
        'dark:bg-bg-800 dark:shadow-px-dark',
        'hover:scale-[1.02] hover:shadow-8px',
        'dark:hover:shadow-8px-dark',
        'sm:col-span-4',
        'md:p-6 md:col-span-6',
        'xl:col-span-4'
      )}
      to={`/calendar/${race.round}`}
      data-testid='calendar-item'
    >
      <div className='flex flex-row justify-between text-sm font-poppins'>
        <span className='text-left'>{`Round ${race.round}`}</span>
        <span className='text-right'>
          {event.toLocaleDateString('en-GB', options)}
        </span>
      </div>
      <div
        className={clsx('flex flex-row items-center mt-2 gap-x-4', 'md:mt-3')}
      >
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
