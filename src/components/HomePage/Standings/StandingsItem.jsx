import clsx from 'clsx';
import TeamBar from './TeamBar';

const StandingsItem = ({ data, type }) => {
  let team;
  if (type === 'drivers') {
    data.team === 'ferrari'
      ? (team = 'Ferrari')
      : data.team === 'red_bull'
      ? (team = 'Red Bull')
      : data.team === 'mercedes'
      ? (team = 'Mercedes')
      : data.team === 'mclaren'
      ? (team = 'McLaren')
      : data.team === 'haas'
      ? (team = 'Haas')
      : data.team === 'williams'
      ? (team = 'Williams')
      : data.team === 'aston_martin'
      ? (team = 'Aston Martin')
      : data.team === 'sauber'
      ? (team = 'Kick Sauber')
      : data.team === 'rb'
      ? (team = 'RB F1 Team')
      : data.team === 'alpine'
      ? (team = 'Alpine')
      : (team = '');
  }

  return (
    <div
      className={clsx(
        'flex items-center p-2 rounded bg-bg-200 shadow-2px',
        'dark:bg-bg-900 dark:shadow-2px-dark'
      )}
    >
      <span className='w-6 text-lg text-center font-poppins'>
        {data.position}
      </span>
      <div className='flex flex-row items-center justify-between w-full font-openSans'>
        <div className='flex flex-row'>
          <TeamBar team={data.team} />
          <span className='text-sm font-semibold sm:w-32'>{data.name}</span>
        </div>
        {type === 'drivers' && (
          <span className='hidden w-32 text-sm text-left sm:block'>{team}</span>
        )}
        <div className='text-right sm:w-20'>
          <span className='text-sm font-semibold'>{data.points}</span>
          <span className='text-xs'> PTS</span>
        </div>
      </div>
    </div>
  );
};
export default StandingsItem;
