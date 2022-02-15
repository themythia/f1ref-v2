import Flag from '../shared/Flag';
import { useNavigate } from 'react-router-dom';

const CalendarItem = ({ race }) => {
  const navigate = useNavigate();
  const event = new Date(race?.date + 'T' + race.time);
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group col-span-4 sm:col-span-4 md:col-span-6 xl:col-span-4'
      onClick={() => navigate(`/calendar/${race.round}`)}
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
    </div>
  );
};
export default CalendarItem;
