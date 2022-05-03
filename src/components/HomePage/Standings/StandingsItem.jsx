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
      : data.team === 'alfa'
      ? (team = 'Alfa Romeo')
      : data.team === 'alphatauri'
      ? (team = 'AlphaTauri')
      : data.team === 'alpine'
      ? (team = 'Alpine')
      : (team = '');
  }

  return (
    <div className='flex items-center p-2 bg-bg-200 dark:bg-bg-900 rounded shadow-2px dark:shadow-2px-dark'>
      <span className='font-poppins text-lg w-6 text-center'>
        {data.position}
      </span>
      <div className='flex flex-row w-full justify-between items-center font-openSans'>
        <div className='flex flex-row'>
          <TeamBar team={data.team} />
          <span className='font-semibold text-sm sm:w-32'>{data.name}</span>
        </div>
        {type === 'drivers' && (
          <span className='hidden sm:block text-left w-32 text-sm'>{team}</span>
        )}
        <div className='text-right sm:w-20'>
          <span className='font-semibold text-sm'>{data.points}</span>
          <span className='text-xs'> PTS</span>
        </div>
      </div>
    </div>
  );
};
export default StandingsItem;
