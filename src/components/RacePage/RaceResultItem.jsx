import clsx from 'clsx';
import TeamBar from '../HomePage/Standings/TeamBar';

const RaceResultItem = ({ driver }) => {
  const status = /(^\+)|(^\d)/gi.test(driver.time) ? driver.time : 'DNF';
  const position =
    driver.positionText === 'D'
      ? 'DSQ'
      : driver.positionText === 'R'
      ? 'NC'
      : driver.positionText;
  return (
    <div
      className={clsx(
        'flex flex-row rounded shadow-2px bg-bg-200 p-2 text-sm items-center',
        'dark:shadow-2px-dark dark:bg-bg-900'
      )}
    >
      <span className='w-6 text-lg text-center font-poppins'>{position}</span>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row'>
          <TeamBar team={driver.teamCode} />
          <span className='w-32 font-semibold text-left font-openSans'>
            {driver.name}
          </span>
        </div>
        <span className='w-32 ml-auto text-left font-openSans'>{status}</span>
        <div
          className={clsx(
            'hidden w-20 ml-auto text-right font-openSans',
            'sm:block'
          )}
        >
          <span className='font-semibold'>{driver.points}</span>
          <span className='text-xs'> PTS</span>
        </div>
      </div>
    </div>
  );
};
export default RaceResultItem;
