import clsx from 'clsx';
import TeamBar from '../Standings/TeamBar';

const LastRaceResult = ({ data }) => {
  return (
    <div
      className={clsx(
        'flex items-center p-2 bg-bg-200 rounded shadow-2px snap-start',
        'dark:bg-bg-900 dark:shadow-2px-dark'
      )}
      data-testid='last-race-result'
    >
      <span className='w-6 text-lg text-center font-poppins'>
        {data.position}
      </span>
      <TeamBar team={data.team} />
      <span className='text-sm font-semibold font-openSans'>{data.name}</span>
    </div>
  );
};
export default LastRaceResult;
